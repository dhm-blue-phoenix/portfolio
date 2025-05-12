import { Injectable } from '@angular/core';

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

export class LanguageService {

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
   * Determines the preferred language, defaulting to 'en' if the browser language
   * is not supported. Updates the currentLanguage property.
  *
  * @private
  * @returns The preferred language code ('de', 'en', or fallback language).
  */
 private getPreferredLanguage(): 'de' | 'en' | string {
   const lang = this.getBrowserLanguage();
   const resultLang = lang === 'de' || lang === 'en' ? lang : 'en';
   this.currentLanguage = resultLang;
   return resultLang;
  }
  
  // >> Public Functions
  public currentLanguage: string = '';
  
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
   return this.currentLanguage === lang;
  }
  
  /**
   * Changes the current language to the specified language code.
   * Only allows switching to supported languages ('de' or 'en'); defaults to 'en' for invalid inputs.
  *
  * @param lang - The language code to switch to (e.g., 'de', 'en').
  */
 public changeLanguage(lang: string): void {
   this.currentLanguage = lang === 'de' ? 'de' : 'en';
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
}