import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Import Services
import { LanguageService } from '../services/language.service';

// Import Components
import { NavbarComponent } from '../desktop/navbar/navbar.component';
import { FooterComponent } from '../desktop/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent implements OnInit {
  public app: any = {};

  constructor(private router: Router, private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      this.app = this.serviceLanguage.getLanguageForAppUi(lang);
    });
    this.serviceLanguage.registerSubscription(subscription);
  }

  public getNextPage() {
    this.router.navigateByUrl("/");
  }
}