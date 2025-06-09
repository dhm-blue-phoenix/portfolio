import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../services/language.service';
import { NavbarService } from '../../services/navbar.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [
    '../../response/mobile/navbar.scss',
    './navbar.component.scss'
  ]
})

export class NavbarComponent implements OnInit {
  public navMenuRef: string[] = ['navWhy', 'navSkills', 'navProjects', 'navContact'];
  public app: any = {};
  public activMenuItem: string = '';
  public disableMobileMenu: boolean = true;

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      this.app = this.serviceLanguage.getLanguageForAppUi(lang);
    });
    const subscriptionMenu = this.navbarService.activeMenuItem$.subscribe(id => {
      this.activMenuItem = id;
    });
    this.serviceLanguage.registerSubscription(subscription);
    this.serviceLanguage.registerSubscription(subscriptionMenu);
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
   * Sets the active menu item by its ID and logs the selection.
   * Updates the `activMenuItem` property to reflect the currently selected menu item.
   *
   * @param id - The ID of the menu item to activate.
   */
  public setMenuRef(id: string): void {
    this.navbarService.setActiveMenuItem(id);
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

  public setDisableMobileMenu(): void {
    this.disableMobileMenu = !this.disableMobileMenu;
  }
}