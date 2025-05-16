import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeLangService {

  constructor() { }

  public app = {
    'lang': 'de',
    'app': {
      'header': {
        'headline': 'Frontend Entwickler'
      },
      'navbar': {
        'menu': ['Warum ich', 'Fähigkeiten', 'Projekte', 'Kontakt']
      },
      'main': {
        'sections': {
          'why_me': {
            'headline': 'Why me',
            'left_container': {
              'first_text': 'I am',
              'last_text': 'located in Munich..|'
            },
            'right_container': 'Why are you passionate about coding? You can include some key traits like: analytical thinking, creativity, persistence and collaboration. A problem-solving mindset is always nice to have.',
            'button': 'Lets talk'
          }
        }
      }
    }
  };
}
