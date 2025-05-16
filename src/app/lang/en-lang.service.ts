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
