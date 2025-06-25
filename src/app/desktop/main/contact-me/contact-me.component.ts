import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Import Services
import { LanguageService } from '../../../services/language.service';
import { NavbarService } from '../../../services/navbar.service';
import { log } from 'console';

interface ContactData {
  name: string,
  email: string,
  message: string
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: [
    '../../../response/mobile/main/contact-me.scss',
    './contact-me.component.scss'
  ]
})

export class ContactMeComponent implements OnInit {
  public app: any = {};
  public contactData: ContactData = {
    name: "",
    email: "",
    message: ""
  };
  public formValid: boolean = false;
  public formFooterValid: boolean = false;
  public formFooterClicked: boolean = false;

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService, private router: Router) { }

  mailTest = false;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://portfolio0977.netlify.app/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.formFooterClicked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formValid = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.formFooterClicked && this.mailTest) {
      this.formValid = false;
      ngForm.resetForm();
    } else {
      this.formFooterValid = !this.formFooterClicked;
      this.formValid = true;
    }
  }

  public setFormFooterClick() {
    this.formFooterClicked = !this.formFooterClicked;
  }

  public getNextPage() {
    this.router.navigateByUrl("/privacyPolicy");
  }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.contact_me;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }

  /**
   * Sets the active menu item globally.
   * 
   * @param id - The menu ID, eg. B. 'navSkills'etc.
   */
  public setActiveMenuItem(id: string): void {
    this.navbarService.setActiveMenuItem(id);
  }
}