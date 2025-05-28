import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})

export class WhyMeComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.why_me;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }
}