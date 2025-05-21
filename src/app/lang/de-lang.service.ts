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
            'headline': 'Warum ich',
            'left_container': {
              'first_text': 'I am',
              'last_text': 'located in Munich..|'
            },
            'right_container': 'Why are you passionate about coding? You can include some key traits like: analytical thinking, creativity, persistence and collaboration. A problem-solving mindset is always nice to have.',
            'button': 'Lets talk'
          },
          'mySkills': {
            'headline': 'Meine Fähigkeiten',
            'left_container': {
              'images': [
                {
                  'path': 'img/main/icons/technologies/angular.svg',
                  'title': 'Angular'
                },
                {
                  'path': 'img/main/icons/technologies/typeScript.svg',
                  'title': 'TypeScript'
                },
                {
                  'path': 'img/main/icons/technologies/javaScript.svg',
                  'title': 'JavaScript'
                },
                {
                  'path': 'img/main/icons/technologies/html.svg',
                  'title': 'HTML'
                },
                {
                  'path': 'img/main/icons/technologies/css.svg',
                  'title': 'CSS'
                },
                {
                  'path': 'img/main/icons/technologies/rest_api.svg',
                  'title': 'Rest-Api'
                },
                {
                  'path': 'img/main/icons/technologies/firebase.svg',
                  'title': 'Firebase'
                },
                {
                  'path': 'img/main/icons/technologies/git.svg',
                  'title': 'GIT'
                },
                {
                  'path': 'img/main/icons/technologies/material_design.svg',
                  'title': 'Material Design'
                },
                {
                  'path': 'img/main/icons/technologies/scrum.svg',
                  'title': 'Scrum'
                }
              ]
            },
            'right_container': {
              'text_header': 'I am currently learning',
              'images': [
                {
                  'path': 'img/main/icons/technologies/react.svg',
                  'title': 'React'
                },
                {
                  'path': 'img/main/icons/technologies/vue_js.svg',
                  'title': 'Vue Js'
                }
              ],
              'text_main': 'Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.'
            }
          }
        }
      }
    }
  };
}
