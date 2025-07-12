import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// EmailJS import
import emailjs from '@emailjs/browser';

// Services
import { LanguageService } from '../../../services/language.service';
import { NavbarService } from '../../../services/navbar.service';

interface ContactAppUi {
  headline: string;
  info: {
    description: string;
    email: string;
    tel: string;
  };
  form: {
    name: string;
    email: string;
    msg: string;
  };
  footer_text: string[];
  btn_text: string;
}

interface ContactData {
  name: string;
  email: string;
  msg: string;
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: [
    '../../../response/mobile/main/contact-me.scss',
    '../../../response/tablet/main/contact-me.scss',
    './contact-me.component.scss'
  ]
})
export class ContactMeComponent implements OnInit {
  public app: any = {};
  public contactData: ContactData = { name: '', email: '', msg: '' };
  public formValid = { name: true, email: true, msg: true };
  public formFooterClicked = false;
  public formFooterValid = false;

  public errorMsg = {
    name: 'Name muss mindestens 3 Zeichen haben.',
    email: 'Bitte eine gültige E-Mail-Adresse eingeben.',
    msg: 'Nachricht muss mindestens 3 Zeichen haben.'
  };

  constructor(
    private serviceLanguage: LanguageService,
    private navbarService: NavbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      this.app = (this.serviceLanguage.getLanguageForAppUi(lang) as any)?.main.sections?.contact_me || {};
    });
    this.serviceLanguage.registerSubscription(subscription);

    emailjs.init('5i_iZ0kwtKxie4YoM');
  }

  get isFormReadyToSubmit(): boolean {
    return (
      this.formValid.name &&
      this.formValid.email &&
      this.formValid.msg &&
      this.formFooterClicked
    );
  }

  public validateField(field: keyof ContactData): void {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

    switch (field) {
      case 'name':
        this.formValid.name = this.contactData.name.trim().length >= 3;
        break;
      case 'email':
        this.formValid.email = emailPattern.test(this.contactData.email.trim());
        break;
      case 'msg':
        this.formValid.msg = this.contactData.msg.trim().length >= 3;
        break;
    }
  }

  public async onSubmit(ngForm: NgForm): Promise<void> {
    this.checkValidFormInput(this.contactData);

    if (!this.formFooterClicked) {
      this.formFooterValid = true;
      return;
    }
    this.formFooterValid = false;

    if (ngForm.valid) {
      try {
        // EmailJS send - "service_id" und "template_id" aus deinem EmailJS-Account
        const result = await emailjs.send(
          'service_oo1j0bj', 
          'template_fu2zgl3',
          {
            from_name: this.contactData.name,
            from_email: this.contactData.email,
            message: this.contactData.msg
          }
        );
        console.log('Email gesendet:', result.status, result.text);
        ngForm.resetForm();
      } catch (error) {
        console.error('Fehler beim Senden der Mail:', error);
      }
    }
  }

  private checkValidFormInput({ name, email, msg }: Partial<ContactData>): void {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    this.formValid.name = (name ?? '').trim().length >= 3;
    this.formValid.email = emailPattern.test((email ?? '').trim());
    this.formValid.msg = (msg ?? '').trim().length >= 3;
  }

  public setFormFooterClick(): void {
    this.formFooterClicked = !this.formFooterClicked;
  }

  public getNextPage(): void {
    this.setActiveMenuItem('');
    this.router.navigateByUrl('/privacypolicy').then(() => window.scrollTo({ top: 0 }));
  }

  public setActiveMenuItem(id: string): void {
    this.navbarService.setActiveMenuItem(id);
  }
}