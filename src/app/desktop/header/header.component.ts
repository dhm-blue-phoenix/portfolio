import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../services/language.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: [
    '../../response/mobile/header.scss',
    './header.component.scss'
  ]
})

export class HeaderComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      this.app = this.serviceLanguage.getLanguageForAppUi(lang);
    });
    this.serviceLanguage.registerSubscription(subscription);
  }

  /**
   * Sets the active menu item globally.
   * 
   * @param id - The menu ID, eg. B. 'navSkills'etc.
   */
  public setActiveMenuItem(id: string): void {
    this.navbarService.setActiveMenuItem(id);
  }
}