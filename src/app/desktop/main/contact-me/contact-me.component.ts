import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: [
    '../../../response/mobile/main/contact-me.scss',
    './contact-me.component.scss'
  ]
})

export class ContactMeComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.contact_me;
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