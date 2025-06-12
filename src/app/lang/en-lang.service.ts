import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnLangService {

  constructor() { }

  public app = {
    'lang': 'en',
    'app': {

      // >> App/Header
      'header': {
        'headline': 'Frontend Developer'
      },

      // >> App/Navbar
      'navbar': {
        'menu': ['Why me', 'Skills', 'Projects', 'Contact']
      },

      // >> App/Main
      'main': {
        'sections': {

          // >> App/Main/Sections/WhyMe
          'why_me': {
            'headline': 'Why me',
            'left_container': {
              'first_text': 'I am',
              'last_text': 'located in Munich..|'
            },
            'right_container': 'Why are you passionate about coding? You can include some key traits like: analytical thinking, creativity, persistence and collaboration. A problem-solving mindset is always nice to have.',
            'button': 'Lets talk'
          },

          // >> App/Main/Sections/MySkills
          'mySkills': {
            'headline': 'My Skills',
            // >> Left Contaienr
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
              'text_header': 'I am currently learning',
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
              'text_main': 'Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.'
            }
          },

          // >> App/Main/Sections/MyProjetcs
          'myProjects': {
            'headline': 'My Projects',
            'projects': [
              // >> Project Informations
              {
                'title': 'Sharkie',
                'description': [
                  // >> Left Container Text
                  {
                    'headline': 'About the project',
                    'weeks': 'Duration: 5 weeks',
                    'text': 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.'
                  },
                  {
                    'headline': 'How I have organised my work process',
                    'weeks': '',
                    'text': 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.'
                  },
                  {
                    'headline': 'What I have learnt',
                    'weeks': '',
                    'text': 'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.'
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
                      'path': 'img/main/icons/technologies/javaScript.svg',
                      'title': 'JS'
                    },
                    {
                      'path': 'img/main/icons/technologies/css.svg',
                      'title': 'CSS'
                    }
                  ],
                  'project_image': 'img/main/projects/sharkie.svg',
                  'project_image_text': false,
                  'button_status': true,
                  'buttons': [
                    {
                      'text': 'Live Test',
                      'url': '#'
                    },
                    {
                      'text': 'GitHub',
                      'url': ''
                    }
                  ]
                }
              },
              {
                'title': 'Ongoing Project',
                'description': [
                  // >> Left Container Text
                  {
                    'headline': 'About the project',
                    'weeks': '',
                    'text': 'What are you currently working on and what features are you implementing? What is the key to success in your projects?  You can mention good planning,  code quality and execution. Show a desire to learn new technologies and continually improve your skills.'
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
                      'path': 'img/main/icons/technologies/javaScript.svg',
                      'title': 'JS'
                    },
                    {
                      'path': 'img/main/icons/technologies/css.svg',
                      'title': 'CSS'
                    }
                  ],
                  'project_image': '',
                  'project_image_text': true,
                  'button_status': false,
                  'buttons': []
                }
              }
            ],
            'right_headline': 'Technologies',
            'project_image_text': 'Comming soon'
          },

          // >> App/Main/Sections/Need_a_Teamplayer
          'need_a_teamplayer': {
            'headline': 'Need a teamplayer?',
            'headline_text': 'Here what my colleagues said about me',
            'infobox': [
              // >> Infobox
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Project',
                  'project_name': 'DA Bublle'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'Linked In Profile',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Project',
                  'project_name': 'DA Bublle'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'Linked In Profile',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Sahra Mueller',
                  'text': 'Project',
                  'project_name': 'DA Bublle'
                },
                'main': {
                 'text': '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’' 
                },
                'footer': {
                  'link_text': 'Linked In Profile',
                  'url': '#'
                }
              }
            ]
          },

          // >> App/Main/Sections/ContactMe
          'contact_me': {
            'headline': 'Contact me',
            'info': {
              // >> Contact Info
              'description': 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work. Example: Feel free to get in touch with job offers or opportunities such as: ...',
              'email': 'fohrer.developer@gmail.com',
              'tel': '0157 123 456 68'
            },
            'form': {
              // >> Contact Form
              'name': 'Your name',
              'email': 'Your Email',
              'msg': 'Your Message'
            },
            'footer_text': ['Ive read the', 'privacy policy ', 'and agree to the processing of my data as outlined.'],
            'btn_text': 'Send'
          }
        }
      },

      // >> App/Footer
      'footer': {
        'left': {
          'text_top': 'Legal notice',
          'text_bottom': '© Claudia Fohrer 2024'
        }
      }
    }
  };
}
