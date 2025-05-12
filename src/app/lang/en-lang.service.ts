import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnLangService {

  constructor() { }

  public app = {
    'lang': 'en',
    'app': {
      'navbar': {
        'menu': ['Why me', 'Skills', 'Projects', 'Contact']
      }
    }
  };
}
