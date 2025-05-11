import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  // In Arbeit
  constructor() {
    console.log('s', this.getBrowserLanguage())
  }

  // Ermittelt die primäre Sprache (z. B. "de" oder "en")
  public getBrowserLanguage(): string {
    const browserLang = navigator.language || navigator.languages[0];
    return browserLang.split('-')[0].toLowerCase();
  }

  // Ermittelt, ob die Sprache Deutsch oder Englisch ist
  public getPreferredLanguage(): 'de' | 'en' | string {
    const lang = this.getBrowserLanguage();
    // Fallback auf Englisch, wenn weder "de" noch "en"
    return lang === 'de' || lang === 'en' ? lang : 'en';
  }
}