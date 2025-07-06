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
                'title': 'El Pollo Loco',
                'description': [
                  // >> Left Container Text
                  {
                    'headline': 'Über das Projekt',
                    'weeks': 'Dauer: 3 Wochen',
                    'text': 'Ein Jump-and-Run-Spiel, das nicht nur Kinder glücklich macht. Denn du Spielst einen Superhelden der in einem Abenteuer gegen das verückte Huhn antritt.'
                  },
                  {
                    'headline': 'Wie ich meinen Arbeitsprozess organisiert habe',
                    'weeks': '',
                    'text': 'Das Projekt wurde bewusst so aufgebaut, damit fortgeschrittene Kozepte wie Objektorientierung anwendung finden.'
                  },
                  {
                    'headline': 'Was ich dabei gelernt habe',
                    'weeks': '',
                    'text': 'Als jemand der immer versucht neue Technologien zu erlernen, hat mir die Arbeit an diessen Projekt sehr gefallen. Denn das Projekt hat es mir erlaubt tiefer in die Objektorientierung von JavaScript einzutauchen.'
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
                  'project_image': 'img/main/projects/el-pollo-loco.png',
                  'project_image_text': false,
                  'button_status': true,
                  'buttons': [
                    {
                      'text': 'Live Test',
                      'url': 'https://el-pollo-loco-9786.netlify.app'
                    },
                    {
                      'text': 'GitHub',
                      'url': 'https://github.com/dhm-blue-phoenix/El_Pollo_Loco.git'
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
                  'headline': 'Maximilian Wagener',
                  'text': 'Projekt',
                  'project_name': 'Join'
                },
                'main': {
                  'text': 'Dominik war für den großteil der Funktionen verantwortlich. Er arbeitet strukturiert, ist engagiert und stets hilfsbereit.'
                },
                'footer': {
                  'link_text': 'LinkedIn-Profil',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Lukas Berger',
                  'text': 'Projekt',
                  'project_name': 'Kochwelt'
                },
                'main': {
                  'text': 'Ich habe Dominik als zuverlässigen und lösungsorientierten Kollegen erlebt. Er bringt seine Ideen proaktiv ein und setzt Aufgaben gewissenhaft um.'
                },
                'footer': {
                  'link_text': 'LinkedIn-Profil',
                  'url': '#'
                }
              },
              {
                'header': {
                  'headline': 'Katharina Steiner',
                  'text': 'Projekt',
                  'project_name': 'Kochwelt'
                },
                'main': {
                  'text': 'Dominik überzeugte durch seine Teamfähigkeit und Hilfsbereitschaft.'
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
              'description': 'Ich freue mich über Anfragen zu Stellenangeboten oder Projektmöglichkeiten - besonders in den Bereich Frontend. Mit meiner Arbeit bringe ich echten Mehrwert für Ihr Team. Schreiben Sie mir gerne!',
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
      },
      
      // >> App/PrivacyPolicy
      'privacy_policy': {
        'headline': 'Datenschutzerklärung',
        'back_button': 'Zurück',
        'controller': {
          'title': 'Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO)',
          'text': ''
        },
        'data_subject_rights': {
          'title': 'Ihre Betroffenenrechte',
          'text': 'Sie können jederzeit folgende Rechte unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten ausüben:',
          'rights': [
            'Zugriff auf Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)',
            'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)',
            'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)',
            'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Verpflichtungen noch nicht löschen dürfen (Art. 18 DSGVO)',
            'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)',
            'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)'
          ],
          'consent_revocation': 'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
          'complaint': 'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslandes Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
          'supervisory_authorities_link': {
            'text': 'Eine Liste der Aufsichtsbehörden (für den nicht-öffentlichen Bereich) mit Anschriften finden Sie unter:',
            'url': 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html'
          }
        },
        'contact_form': {
          'title': 'Kontaktformular',
          'type_purpose': {
            'title': 'Art und Zweck der Verarbeitung:',
            'text': 'Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer gültigen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.'
          },
          'legal_basis': {
            'title': 'Rechtsgrundlage:',
            'text': 'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Durch die Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).'
          },
          'recipients': {
            'title': 'Empfänger:',
            'text': 'Empfänger der Daten sind ggf. Auftragsverarbeiter.'
          },
          'storage_duration': {
            'title': 'Speicherdauer:',
            'text': 'Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht. Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.'
          },
          'provision': {
            'title': 'Bereitstellung erforderlich oder vorgeschrieben:',
            'text': 'Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.'
          }
        },
        'google_analytics': {
          'title': 'Einsatz von Google Analytics',
          'text': 'Sofern Sie Ihre Einwilligung erteilt haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Websites wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.',
          'links': [
            {
              'text': 'Weitere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter:',
              'url': 'https://www.google.com/analytics/terms/de.html'
            },
            {
              'text': 'und unter:',
              'url': 'https://policies.google.com/?hl=de'
            }
          ],
          'purpose': 'Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.',
          'storage_duration': 'Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsfrist erreicht ist, erfolgt automatisch einmal im Monat.',
          'revocation': {
            'title': 'Widerruf der Einwilligung:',
            'text': 'Sie können das Tracking durch Google Analytics auf unserer Website unterbinden, indem Sie diesen Link klicken. Dadurch wird ein Opt-Out-Cookie auf Ihrem Gerät installiert. Dieses verhindert das Tracking durch Google Analytics für diese Website und diesen Browser zukünftig, solange das Cookie in Ihrem Browser installiert bleibt.',
            'link': 'Sie können das Tracking durch Google Analytics auf unserer Website unterbinden, indem Sie diesen Link klicken.'
          },
          'browser_settings': 'Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.',
          'browser_plugin': {
            'text': 'Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:',
            'url': 'https://tools.google.com/dlpage/gaoptout?hl=de'
          }
        },
        'google_fonts': {
          'title': 'Einsatz von Script-Bibliotheken (Google Web Fonts)',
          'text': 'Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.',
          'links': [
            {
              'text': 'Weitere Informationen zu Google Web Fonts finden Sie unter:',
              'url': 'https://developers.google.com/fonts/faq'
            },
            {
              'text': 'und in der Datenschutzerklärung von Google:',
              'url': 'https://www.google.com/policies/privacy/'
            }
          ]
        },
        'right_to_object': {
          'title': 'Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO',
          'case_specific': {
            'title': 'Einzelfallbezogenes Widerspruchsrecht',
            'text': 'Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.'
          },
          'processing_grounds': 'Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
          'recipient': {
            'title': 'Empfänger eines Widerspruchs',
            'text': ''
          }
        },
        'changes': {
          'title': 'Änderungen unserer Datenschutzerklärung',
          'text': 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.'
        },
        'questions': {
          'title': 'Fragen an den Datenschutzbeauftragten',
          'text': 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:'
        },
        'source': {
          'text': 'Die Datenschutzerklärung wurde mit Unterstützung der activeMind AG, den Experten für externe Datenschutzbeauftragte, erstellt (Version #2020-09-30).'
        }
      },

      // >> App/LegalNotice
      'legal_notice': {
        'headline': 'Impressum',
        'back_button': 'Zurück',
        'contact': {
          'title': 'Kontakt',
          'phone': 'Telefon: +43 650 670 6120',
          'email': 'E-Mail: dmozelt@gmail.com'
        },
        'address': {
          'name': 'Dominik Mozelt',
          'street': 'Bachreith 17',
          'city': '2443 Leithaprodersdorf'
        },
        'source': {
          'text': 'Quelle:',
          'url': 'https://www.e-recht24.de/impressum-generator.html'
        }
      }
    }
  };
}