import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// Import Services
import { LanguageService } from '../../../services/language.service';
import { NavbarService } from '../../../services/navbar.service';

interface ContactData {
  name: string,
  email: string,
  msg: string
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
    msg: ""
  };
  public formValid = {
    name: false,
    email: false,
    msg: false
  };
  public formFooterValid: boolean = false;
  public formFooterClicked: boolean = false;

  constructor(private serviceLanguage: LanguageService, private navbarService: NavbarService, private router: Router) { }

  mailTest = false;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://portfolio-dominik-mozelt.netlify.app/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      this.checkValidFormInput(this.contactData);
    }

    if (!this.formFooterClicked) {
      this.formFooterValid = true;
      return;
    }

    this.formFooterValid = false;

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            // ggf. reset flags, wenn du möchtest
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  private checkValidFormInput({ name, email, msg }: Partial<ContactData>): void {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

    const n = (name ?? '').trim();
    const e = (email ?? '').trim();
    const m = (msg ?? '').trim();

    this.formValid.name = n.length < 3;
    this.formValid.email = e.length < 3 || !emailPattern.test(e);
    this.formValid.msg = m.length < 3;
  }

  public setFormFooterClick() {
    this.formFooterClicked = !this.formFooterClicked;
  }

  public getNextPage() {
    this.setActiveMenuItem('');
    this.router.navigateByUrl("/privacypolicy").then(() => {
      window.scrollTo({ top: 0 });
    });
  }

  public validateField(field: string): void {
    switch (field) {
      case 'name':
        this.formValid.name = !this.contactData.name || this.contactData.name.trim().length < 3;
        break;
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        this.formValid.email = !emailPattern.test(this.contactData.email || '');
        break;
      case 'msg':
        this.formValid.msg = !this.contactData.msg || this.contactData.msg.trim().length < 3;
        break;
    }
  }

  public errorMsg = {
    name: 'Name muss mindestens 3 Zeichen haben.',
    email: 'Bitte eine gültige E-Mail-Adresse eingeben.',
    msg: 'Nachricht muss mindestens 3 Zeichen haben.'
  };

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