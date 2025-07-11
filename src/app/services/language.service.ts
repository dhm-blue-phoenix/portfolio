import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

// Services
import { DeLangService } from '../lang/de-lang.service';
import { EnLangService } from '../lang/en-lang.service';

interface AppUiLanguage {
  'lang': string,
  'app': object
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService implements OnDestroy {

  public currentLanguage = new BehaviorSubject<string>('en');
  private subscriptions: Subscription[] = [];

  constructor(
    private serviceLangDe: DeLangService,
    private serviceLangEn: EnLangService
  ) {
    this.getPreferredLanguage();
  }

  // >> Private Functions
  private readonly languages: string[] = ['de', 'en'];

  /**
   * Retrieves the primary language code from the browser's language settings.
   * Extracts the base language code (e.g., 'de' from 'de-DE' or 'en' from 'en-US').
   *
   * @private
   * @returns The primary language code in lowercase (e.g., 'de', 'en').
   */
  private getBrowserLanguage(): string {
    const browserLang = navigator.language || navigator.languages[0];
    return browserLang.split('-')[0].toLowerCase();
  }

  /**
   * Determines the preferred language, checking localStorage first, then falling back to
   * browser language, and defaulting to 'de' if neither is supported.
   * Updates the currentLanguage property.
   *
   * @private
   * @returns The preferred language code ('de', 'en', or fallback language).
   */
  private getPreferredLanguage(): 'de' | 'en' | string {
    // Check if a language is stored in localStorage
    const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('preferredLanguage') : null;
    let resultLang: string;

    if (storedLang && this.languages.includes(storedLang)) {
      // Use stored language if it exists and is supported
      resultLang = storedLang;
    } else {
      // Fallback to browser language or default to 'de'
      const browserLang = this.getBrowserLanguage();
      resultLang = this.languages.includes(browserLang) ? browserLang : 'de';
    }

    this.currentLanguage.next(resultLang);
    return resultLang;
  }

  // >> Public Functions
  /**
   * Retrieves the list of all supported languages.
   *
   * @returns An array of supported language codes (e.g., ['de', 'en']).
   */
  public getAllLanguages(): string[] {
    return this.languages;
  }

  /**
   * Checks if the provided language code matches the current language.
   *
   * @param lang - The language code to check (e.g., 'de', 'en').
   * @returns `true` if the provided language is the current language, `false` otherwise.
   */
  public checkCurrentLanguage(lang: string): boolean {
    return this.currentLanguage.value === lang;
  }

  /**
   * Changes the current language to the specified language code.
   * Only allows switching to supported languages ('de' or 'en'); defaults to 'de' for invalid inputs.
   * Saves the selected language to localStorage.
   *
   * @param lang - The language code to switch to (e.g., 'de', 'en').
   */
  public changeLanguage(lang: string): void {
    const newLang = this.languages.includes(lang) ? lang : 'de';
    this.currentLanguage.next(newLang);
    // Save the selected language to localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLang);
    }
  }

  /**
   * Retrieves the application UI data for a specified language.
   * Searches through a predefined list of language-specific app UI configurations
   * and returns the corresponding app data. If no match is found, an empty object is returned.
   *
   * @param lang - The language code to search for (e.g., 'de' for German, 'en' for English).
   * @returns The application UI data object for the specified language, or an empty object if no match is found.
   */
  public getLanguageForAppUi(lang: string): object {
    const appUiLanguages: AppUiLanguage[] = [this.serviceLangDe.app, this.serviceLangEn.app];
    const appUiLanguage: AppUiLanguage | undefined = appUiLanguages.find(find => find.lang === lang);
    return appUiLanguage?.app || {};
  }

  /**
   * Registers a subscription to be managed by the LanguageService.
   * The subscription is added to an internal array and will be automatically unsubscribed
   * when the LanguageService is destroyed.
   * 
   * @param subscription - The RxJS subscription to register.
   */
  public registerSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.currentLanguage.complete();
  }
}