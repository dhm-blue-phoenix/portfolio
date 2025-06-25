import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Import Services
import { LanguageService } from '../../services/language.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: [
    '../../response/mobile/footer.scss',
    './footer.component.scss'
  ]
})

export class FooterComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService, private router: Router) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      this.app = this.serviceLanguage.getLanguageForAppUi(lang);
    });
    this.serviceLanguage.registerSubscription(subscription);
  }

  public getNextPage() {
    this.router.navigateByUrl("/legalNotice");
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