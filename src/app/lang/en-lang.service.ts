import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnLangService {

  constructor() { }

  public app = {
    'lang': 'en',
    'app': {
      'header': {
        'headline': 'Frontend Developer'
      },
      'navbar': {
        'menu': ['Why me', 'Skills', 'Projects', 'Contact']
      }
    }
  };
}
