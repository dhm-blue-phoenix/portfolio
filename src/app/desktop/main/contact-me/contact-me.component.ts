import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.contact_me;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }
}