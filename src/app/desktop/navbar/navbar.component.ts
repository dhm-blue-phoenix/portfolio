import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  public navMenuRef: string[] = ['navWhy', 'navSkills', 'navProjects', 'navContact'];
  public app: any = {};

  constructor(private serviceLanguage: LanguageService) {
    this.app = this.serviceLanguage.getLanguageForAppUi(this.serviceLanguage.currentLanguage);
  }

  /**
   * Retrieves the list of all supported languages from the LanguageService.
   *
   * @returns An array of supported language codes (e.g., ['de', 'en']).
   */
  public getAllLanguages(): string[] {
    return this.serviceLanguage.getAllLanguages();
  }

  /**
   * Changes the current language by invoking the LanguageService's changeLanguage method.
   * Only supported languages ('de' or 'en') are applied; invalid inputs default to 'en'.
   *
   * @param lang - The language code to switch to (e.g., 'de', 'en').
   */
  public changeLanguage(lang: string): void {
    this.serviceLanguage.changeLanguage(lang);
    this.app = this.serviceLanguage.getLanguageForAppUi(lang);
  }

  /**
   * Checks if the provided language code matches the current language.
   *
   * @param lang - The language code to check (e.g., 'de', 'en').
   * @returns `true` if the provided language is the current language, `false` otherwise.
   */
  public checkLanguage(lang: string): boolean {
    return this.serviceLanguage.checkCurrentLanguage(lang);
  }
}