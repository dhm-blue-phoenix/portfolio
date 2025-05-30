import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-need-a-teamplayer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './need-a-teamplayer.component.html',
  styleUrl: './need-a-teamplayer.component.scss'
})

export class NeedATeamplayerComponent {
  public app: any = {};

  constructor(private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.need_a_teamplayer;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }
}