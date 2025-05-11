import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { LanguageService } from '../../services/language.service';

interface LanguageItem {
  readonly lang: string
}

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
  private readonly languageList: LanguageItem[] = [
    { 'lang': 'DE' },
    { 'lang': 'EN' }
  ];
  public currentLanguage: LanguageItem | undefined;

  constructor(private langService: LanguageService) {
    this.changeLanguage('EN');
  }

  public checkLanguage(lang: string): boolean {
    if (this.currentLanguage) {
      return this.currentLanguage.lang === lang;
    }
    return false;
  }

  public changeLanguage(lang: string): void {
    this.currentLanguage = this.languageList.find(item => item.lang === lang);

    console.log('Endere Sprache zu:', this.currentLanguage);
  }
}