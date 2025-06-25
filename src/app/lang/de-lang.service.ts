import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeLangService {

  constructor() { }

  public app = {
    'lang': 'de',
    'app': {

      // >> App/Header
      'header': {
        'headline': 'Frontend Entwickler'
      },

      // >> App/Navbar
      'navbar': {
        'menu': ['Warum ich', 'Fähigkeiten', 'Projekte', 'Kontakt']
      },

      // >> App/Main
      'main': {
        'sections': {

          // >> App/Main/Sections/WhyMe
          'why_me': {
            'headline': 'Warum ich',
            'left_container': {
              'first_text': 'Ich befinde',
              'last_text': 'mich in Eisenstadt Umgebung..|'
            },
            'right_container': 'Ich programmiere gerne, weil einem da keine Grenzen gesetzt sind.',
            'button': 'Lass uns reden'
          },

          // >> App/Main/Sections/MySkills
          'mySkills': {
            'headline': 'Meine Fähigkeiten',
            // >> Left Container
            'left_container': {
              'images': [
                // >> Technologies Icons
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
            // >> Right Container
            'right_container': {
              'text_header': 'Ich lerne derzeit',
              'images': [
                // >> Technologies Icons
                {
                  'path': 'img/main/icons/technologies/react.svg',
                  'title': 'React'
                },
                {
                  'path': 'img/main/icons/technologies/vue_js.svg',
                  'title': 'Vue Js'
                }
              ],
              'text_main': 'Durch das Erlernen der neuen Fähigkeiten lassen sich Projekte effizienter umsetzen.'
            }
          },

          // >> App/Main/Sections/MyProjetcs
          'myProjects': {
            'headline': 'Meine Projekte',
            'projects': [
              // >> Project Informations
              {
                'title': 'Join',
                'description': [
                  // >> Left Container Text
                  {
                    'headline': 'Über das Projekt',
                    'weeks': 'Dauer: 2 Monate',
                    'text': 'Ein Aufgabenmanager, der inspiriert ist vom Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag & Drop und weisen Sie Benutzer und Kategorien zu.'
                  },
                  {
                    'headline': 'Wie ich meinen Arbeitsprozess organisiert habe',
                    'weeks': '',
                    'text': 'Das Projekt wurde bewusst modular aufgebaut, um einen übersichtlicheren und wiederverwendbaren Code zu erzielen.'
                  },
                  {
                    'headline': 'Meine Gruppenarbeitserfahrung',
                    'weeks': '',
                    'text': 'Es ist viel leichter, große Projekte zu zweit anstatt allein umzusetzen.'
                  }
                ],
                // >> Right Container
                'right_container': {
                  'images': [
                    // >> Technologies Icons
                    {
                      'path': 'img/main/icons/technologies/html.svg',
                      'title': 'HTML'
                    },
                    {
                      'path': 'img/main/icons/technologies/css.svg',
                      'title': 'CSS'
                    },
                    {
                      'path': 'img/main/icons/technologies/javaScript.svg',
                      'title': 'JS'
                    }
                  ],
                  'project_image': 'img/main/projects/join.png',
                  'project_image_text': false,
                  'button_status': true,
                  'buttons': [
                    {
                      'text': 'Live Test',
                      'url': 'https://enchanting-marigold-19046c.netlify.app'
                    },
                    {
                      'text': 'GitHub',
                      'url': 'https://github.com/dhm-blue-phoenix/join.git'
                    }
                  ]
                }
              },
              {
                'title': 'DA Bubble',
                'description': [
                  // >> Left Container Text
                  {
                    'headline': 'Über das Projekt',
                    'weeks': 'Dauer: ...',
                    'text': 'Kommt noch...'
                  }
                ],
                // >> Right Container
                'right_container': {
                  'images': [
                    // >> Technologies Icons
                  ],
                  'project_image': '',
                  'project_image_text': true,
                  'button_status': false,
                  'buttons': []
                }
              }
            ],
            'right_headline': 'Technologien',
            'project_image_text': 'Demnächst verfügbar',
          },

          // >> App/Main/Sections/Need_a_Teamplayer
          'need_a_teamplayer': {
            'headline': 'Brauchen Sie einen Teamplayer?',
            'headline_text': 'Hier, was meine Kollegen über mich gesagt haben',
            'infobox': [
              // >> Infobox
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Projekt',
                  'project_name': 'DA Bubble'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'LinkedIn-Profil',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Projekt',
                  'project_name': 'DA Bubble'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'LinkedIn-Profil',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Projekt',
                  'project_name': 'DA Bubble'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'LinkedIn-Profil',
                  'url': '#'
                }
              }
            ]
          },

          // >> App/Main/Sections/ContactMe
          'contact_me': {
            'headline': 'Kontaktieren Sie mich',
            'info': {
              // >> Contact Info
              'description': '',
              'email': 'dmozelt@gmail.com',
              'tel': '+43 65 0670 6120'
            },
            'form': {
              // >> Contact Form
              'name': 'Ihr Name',
              'email': 'Ihre E-Mail',
              'msg': 'Ihre Nachricht'
            },
            'footer_text': ['Ich habe die', 'Datenschutzerklärung', 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.'],
            'btn_text': 'Senden'
          }
        }
      },

      // >> App/Footer
      'footer': {
        'left': {
          'text_top': 'Rechtlicher Hinweis',
          'text_bottom': '© Dominik Mozelt 2025'
        }
      }
    }
  };
}