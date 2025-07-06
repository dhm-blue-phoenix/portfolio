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
                      'text': 'Live Test',
                      'url': 'https://join0987.netlify.app'
                    },
                    {
                      'text': 'GitHub',
                      'url': 'https://github.com/dhm-blue-phoenix/join.git'
                    }
                  ]
                }
              },
              {
                "title": "El Pollo Loco",
                "description": [
                  // >> Left Container Text
                  {
                    "headline": "About the Project",
                    "weeks": "Duration: 3 weeks",
                    "text": "A jump-and-run game that not only makes kids happy. You play as a superhero embarking on an adventure against a crazy chicken."
                  },
                  {
                    "headline": "How I Organized My Workflow",
                    "weeks": "",
                    "text": "The project was deliberately structured to apply advanced concepts like object-oriented programming."
                  },
                  {
                    "headline": "What I Learned",
                    "weeks": "",
                    "text": "As someone who is always eager to learn new technologies, I really enjoyed working on this project. It allowed me to dive deeper into JavaScript's object-oriented programming."
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
                  "project_image": "img/main/projects/el-pollo-loco.png",
                  "project_image_text": false,
                  "button_status": true,
                  "buttons": [
                    {
                      "text": "Live Test",
                      "url": "https://el-pollo-loco-9786.netlify.app"
                    },
                    {
                      "text": "GitHub",
                      "url": "https://github.com/dhm-blue-phoenix/El_Pollo_Loco.git"
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
                'header': {
                  'headline': 'Maximilian Wagener',
                  'text': 'Project',
                  'project_name': 'Join'
                },
                'main': {
                  'text': 'Dominik was responsible for the majority of the functionality. He works in a structured manner, is committed, and always willing to help.'
                },
                'footer': {
                  'link_text': 'LinkedIn Profile',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Lukas Berger',
                  'text': 'Project',
                  'project_name': 'Kochwelt'
                },
                'main': {
                  'text': 'I experienced Dominik as a reliable and solution-oriented colleague. He contributes his ideas proactively and completes tasks with great care.'
                },
                'footer': {
                  'link_text': 'LinkedIn Profile',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Katharina Steiner',
                  'text': 'Project',
                  'project_name': 'Kochwelt'
                },
                'main': {
                  'text': 'Dominik stood out for his teamwork skills and helpfulness.'
                },
                'footer': {
                  'link_text': 'LinkedIn Profile',
                  'url': '#'
                }
              }
            ]
          },

          // >> App/Main/Sections/ContactMe
          "contact_me": {
            "headline": "Contact Me",
            "info": {
              // >> Contact Info
              "description": "I welcome inquiries about job offers or project opportunities - especially in the frontend area. With my work I bring real added value to your team, feel free to write to me!",
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
      },

      // >> App/PrivacyPolicy
      'privacy_policy': {
        'headline': 'Privacy Policy',
        'back_button': 'Back',
        'controller': {
          'title': 'Controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR)',
          'text': ''
        },
        'data_subject_rights': {
          'title': 'Your Data Subject Rights',
          'text': 'You can exercise the following rights at any time using the contact details of our data protection officer:',
          'rights': [
            'Access to your data stored by us and its processing (Art. 15 GDPR)',
            'Rectification of inaccurate personal data (Art. 16 GDPR)',
            'Deletion of your data stored by us (Art. 17 GDPR)',
            'Restriction of data processing if we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR)',
            'Objection to the processing of your data by us (Art. 21 GDPR)',
            'Data portability, provided you have consented to the data processing or have concluded a contract with us (Art. 20 GDPR)'
          ],
          'consent_revocation': 'If you have given us consent, you can revoke it at any time with effect for the future.',
          'complaint': 'You can lodge a complaint with a supervisory authority at any time, e.g., the competent supervisory authority in the federal state of your residence or the authority responsible for us as the controller.',
          'supervisory_authorities_link': {
            'text': 'A list of supervisory authorities (for the non-public sector) with addresses can be found at:',
            'url': 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html'
          }
        },
        'contact_form': {
          'title': 'Contact Form',
          'type_purpose': {
            'title': 'Type and Purpose of Processing:',
            'text': 'The data you enter will be stored for the purpose of individual communication with you. This requires the provision of a valid email address and your name. These are used to assign the request and subsequently respond to it. The provision of additional data is optional.'
          },
          'legal_basis': {
            'title': 'Legal Basis:',
            'text': 'The processing of the data entered into the contact form is based on a legitimate interest (Art. 6(1)(f) GDPR). By providing the contact form, we aim to enable you to contact us easily. The information you provide will be stored for the purpose of processing the request and for possible follow-up questions. If you contact us to request an offer, the processing of the data entered into the contact form is carried out for the implementation of pre-contractual measures (Art. 6(1)(b) GDPR).'
          },
          'recipients': {
            'title': 'Recipients:',
            'text': 'Recipients of the data may include processors.'
          },
          'storage_duration': {
            'title': 'Storage Duration:',
            'text': 'Data will be deleted no later than 6 months after processing the request. If a contractual relationship arises, we are subject to the statutory retention periods under the German Commercial Code (HGB) and will delete your data after these periods expire.'
          },
          'provision': {
            'title': 'Provision Mandatory or Required:',
            'text': 'The provision of your personal data is voluntary. However, we can only process your request if you provide us with your name, email address, and the reason for the request.'
          }
        },
        'google_analytics': {
          'title': 'Use of Google Analytics',
          'text': 'If you have given your consent, Google Analytics, a web analytics service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (hereinafter: “Google”), is used on this website. Google Analytics uses so-called “cookies,” which are text files stored on your computer that enable an analysis of your use of the website. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. However, due to the activation of IP anonymization on these websites, your IP address will be truncated by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area beforehand. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and truncated there. The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data.',
          'links': [
            {
              'text': 'Further information on terms of use and data protection can be found at:',
              'url': 'https://www.google.com/analytics/terms/de.html'
            },
            {
              'text': 'and at:',
              'url': 'https://policies.google.com/?hl=de'
            }
          ],
          'purpose': 'On behalf of the operator of this website, Google will use this information to evaluate your use of the website, compile reports on website activities, and provide other services related to website and internet usage to the website operator.',
          'storage_duration': 'The data sent by us and linked to cookies, user IDs (e.g., User ID), or advertising IDs will be automatically deleted after 14 months. The deletion of data whose retention period has been reached occurs automatically once a month.',
          'revocation': {
            'title': 'Revocation of Consent:',
            'text': 'You can prevent tracking by Google Analytics on our website by clicking this link. This will install an opt-out cookie on your device. This will prevent tracking by Google Analytics for this website and this browser in the future, as long as the cookie remains installed in your browser.',
            'link': 'You can prevent tracking by Google Analytics on our website by clicking this link.'
          },
          'browser_settings': 'You can also prevent the storage of cookies by adjusting your browser software settings accordingly; however, we point out that in this case, you may not be able to use all functions of this website to their full extent.',
          'browser_plugin': {
            'text': 'Additionally, you can prevent the collection of data generated by the cookie and related to your use of the website (including your IP address) by Google, as well as the processing of this data by Google, by downloading and installing the browser plugin available at the following link:',
            'url': 'https://tools.google.com/dlpage/gaoptout?hl=de'
          }
        },
        'google_fonts': {
          'title': 'Use of Script Libraries (Google Web Fonts)',
          'text': 'To display our content correctly and graphically appealing across browsers, we use “Google Web Fonts” from Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; hereinafter “Google”) on this website to display fonts.',
          'links': [
            {
              'text': 'Further information about Google Web Fonts can be found at:',
              'url': 'https://developers.google.com/fonts/faq'
            },
            {
              'text': 'and in Google’s Privacy Policy:',
              'url': 'https://www.google.com/policies/privacy/'
            }
          ]
        },
        'right_to_object': {
          'title': 'Information About Your Right to Object Under Art. 21 GDPR',
          'case_specific': {
            'title': 'Case-Specific Right to Object',
            'text': 'You have the right to object, on grounds relating to your particular situation, at any time to the processing of personal data concerning you, which is based on Art. 6(1)(f) GDPR (data processing based on a balancing of interests); this also applies to profiling based on this provision within the meaning of Art. 4(4) GDPR.'
          },
          'processing_grounds': 'If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing serves the establishment, exercise, or defense of legal claims.',
          'recipient': {
            'title': 'Recipient of an Objection',
            'text': ''
          }
        },
        'changes': {
          'title': 'Changes to Our Privacy Policy',
          'text': 'We reserve the right to adapt this privacy policy to ensure it always complies with current legal requirements or to implement changes to our services in the privacy policy, e.g., when introducing new services. The new privacy policy will then apply to your subsequent visit.'
        },
        'questions': {
          'title': 'Questions to the Data Protection Officer',
          'text': 'If you have any questions about data protection, please send us an email or contact the person responsible for data protection in our organization directly:'
        },
        'source': {
          'text': 'The privacy policy was created with the assistance of activeMind AG, the experts for external data protection officers (Version #2020-09-30).'
        }
      },

      // >> App/LegalNotice
      'legal_notice': {
        'headline': 'Legal Notice',
        'back_button': 'Back',
        'contact': {
          'title': 'Contact',
          'phone': 'Phone: +43 650 670 6120',
          'email': 'Email: dmozelt@gmail.com'
        },
        'address': {
          'name': 'Domenik Mozelt',
          'street': 'Bachreith 17',
          'city': '2443 Leithaprodersdorf'
        },
        'source': {
          'text': 'Source:',
          'url': 'https://www.e-recht24.de/impressum-generator.html'
        }
      }
    }
  };
}