import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeLangService {

  constructor() { }

  public app = {
    'lang': 'de',
    'app': {
      'navbar': {
        'menu': ['Warum ich', 'Fähigkeiten', 'Projekte', 'Kontakt']
      }
    }
  };
}
