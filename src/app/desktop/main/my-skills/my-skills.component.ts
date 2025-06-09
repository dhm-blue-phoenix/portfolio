import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-skills.component.html',
  styleUrls: [
    '../../../response/mobile/main/my-skills.scss',
    './my-skills.component.scss'
  ]
})

export class MySkillsComponent implements OnInit {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.mySkills;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }
}