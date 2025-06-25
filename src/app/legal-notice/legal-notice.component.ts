import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent {
  public app: any = {};

  constructor(private router: Router) { }

   public getNextPage() {
    this.router.navigateByUrl("/");
  }
}