import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnLangService {

  constructor() { }

  public app = {
    "lang": "en",
    "app": {

      // >> App/Header
      "header": {
        "headline": "Frontend Developer"
      },

      // >> App/Navbar
      "navbar": {
        "menu": ["Why me", "Skills", "Projects", "Contact"]
      },

      // >> App/Main
      "main": {
        "sections": {

          // >> App/Main/Sections/WhyMe
          "why_me": {
            "headline": "Why me",
            "left_container": {
              "first_text": "I am located",
              "last_text": "in the Eisenstadt area..|"
            },
            "right_container": "I enjoy programming because there are no limits.",
            "button": "Let's talk"
          },

          // >> App/Main/Sections/MySkills
          "mySkills": {
            "headline": "My Skills",

            // >> Left Container
            "left_container": {
              "images": [
                // >> Technologies Icons
                {
                  "path": "img/main/icons/technologies/angular.svg",
                  "title": "Angular"
                },
                {
                  "path": "img/main/icons/technologies/typeScript.svg",
                  "title": "TypeScript"
                },
                {
                  "path": "img/main/icons/technologies/javaScript.svg",
                  "title": "JavaScript"
                },
                {
                  "path": "img/main/icons/technologies/html.svg",
                  "title": "HTML"
                },
                {
                  "path": "img/main/icons/technologies/css.svg",
                  "title": "CSS"
                },
                {
                  "path": "img/main/icons/technologies/rest_api.svg",
                  "title": "Rest API"
                },
                {
                  "path": "img/main/icons/technologies/firebase.svg",
                  "title": "Firebase"
                },
                {
                  "path": "img/main/icons/technologies/git.svg",
                  "title": "GIT"
                },
                {
                  "path": "img/main/icons/technologies/material_design.svg",
                  "title": "Material Design"
                },
                {
                  "path": "img/main/icons/technologies/scrum.svg",
                  "title": "Scrum"
                }
              ]
            },
            // >> Right Container
            "right_container": {
              "text_header": "I am currently learning",
              "images": [
                // >> Technologies Icons
                {
                  "path": "img/main/icons/technologies/react.svg",
                  "title": "React"
                },
                {
                  "path": "img/main/icons/technologies/vue_js.svg",
                  "title": "Vue.js"
                }
              ],
              "text_main": "Learning new skills helps implement projects more efficiently."
            }
          },

          // >> App/Main/Sections/MyProjetcs
          "myProjects": {
            "headline": "My Projects",
            "projects": [
              // >> Project Informations
              {
                "title": "Join",
                "description": [
                  // >> Left Container Text
                  {
                    "headline": "About the project",
                    "weeks": "Duration: 2 months",
                    "text": "A task manager inspired by the Kanban system. Create and organize tasks via drag & drop and assign users and categories."
                  },
                  {
                    "headline": "How I organized my workflow",
                    "weeks": "",
                    "text": "The project was built modularly for clearer and reusable code."
                  },
                  {
                    "headline": "My teamwork experience",
                    "weeks": "",
                    "text": "It’s much easier to implement large projects with a partner than alone."
                  }
                ],
                // >> Right Container
                "right_container": {
                  "images": [
                    // >> Technologies Icons
                    {
                      "path": "img/main/icons/technologies/html.svg",
                      "title": "HTML"
                    },
                    {
                      "path": "img/main/icons/technologies/css.svg",
                      "title": "CSS"
                    },
                    {
                      "path": "img/main/icons/technologies/javaScript.svg",
                      "title": "JS"
                    }
                  ],
                  "project_image": "img/main/projects/join.png",
                  "project_image_text": false,
                  "button_status": true,
                  "buttons": [
                    { 
                      "text": "Live Test",
                      "url": "https://enchanting-marigold-19046c.netlify.app"
                    },
                    { 
                      "text": "GitHub",
                      "url": "https://github.com/dhm-blue-phoenix/join.git"
                    }
                  ]
                }
              },
              {
                "title": "DA Bubble",
                "description": [
                  // >> Left Container Text
                  {
                    "headline": "About the project",
                    "weeks": "Duration: ...",
                    "text": "Coming soon..."
                  }
                ],
                // >> Right Container
                "right_container": {
                  "images": [
                    // >> Technologies Icons
                  ],
                  "project_image": "",
                  "project_image_text": true,
                  "button_status": false,
                  "buttons": []
                }
              }
            ],
            "right_headline": "Technologies",
            "project_image_text": "Coming soon"
          },

          // >> App/Main/Sections/Need_a_Teamplayer
          "need_a_teamplayer": {
            "headline": "Need a Team Player?",
            "headline_text": "Here’s what my colleagues said about me",
            "infobox": [
              // >> Infobox
              {
                "header": {
                  "headline": "Sahra Mueller",
                  "text": "Project",
                  "project_name": "DA Bubble"
                },
                "main": {
                  "text": "Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."
                },
                "footer": {
                  "link_text": "LinkedIn Profile",
                  "url": "#"
                }
              },
              {
                "header": {
                  "headline": "Sahra Mueller",
                  "text": "Project",
                  "project_name": "DA Bubble"
                },
                "main": {
                  "text": "Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."
                },
                "footer": {
                  "link_text": "LinkedIn Profile",
                  "url": "#"
                }
              },
              {
                "header": {
                  "headline": "Sahra Mueller",
                  "text": "Project",
                  "project_name": "DA Bubble"
                },
                "main": {
                  "text": "Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."
                },
                "footer": {
                  "link_text": "LinkedIn Profile",
                  "url": "#"
                }
              }
            ]
          },

          // >> App/Main/Sections/ContactMe
          "contact_me": {
            "headline": "Contact Me",
            "info": {
              // >> Contact Info
              "description": "",
              "email": "dmozelt@gmail.com",
              "tel": "+43 65 0670 6120"
            },
            "form": {
              // >> Contact Form
              "name": "Your Name",
              "email": "Your E-Mail",
              "msg": "Your Message"
            },
            "footer_text": [
              "I have read the",
              "Privacy Policy",
              "and agree to the processing of my data as described."
            ],
            "btn_text": "Send"
          }
        }
      },

      // >> App/Footer
      "footer": {
        "left": {
          "text_top": "Legal Notice",
          "text_bottom": "© Dominik Mozelt 2025"
        }
      }
    }
  };
}