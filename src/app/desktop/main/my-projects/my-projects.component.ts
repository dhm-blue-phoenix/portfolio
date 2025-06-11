import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Services
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-projects.component.html',
  styleUrls: [
    '../../../response/mobile/main/my-projects.scss',
    './my-projects.component.scss'
  ]
})

export class MyProjectsComponent implements OnInit {
  public app: any = {};
  public currentProject: number = 0;
  public animate: number = 0;

  constructor(private serviceLanguage: LanguageService) { }

  ngOnInit() {
    const subscription = this.serviceLanguage.currentLanguage.subscribe(lang => {
      const temp: any = this.serviceLanguage.getLanguageForAppUi(lang);
      this.app = temp.main.sections.myProjects;
    });
    this.serviceLanguage.registerSubscription(subscription);
  }

  public setNextProject(current: number): void {
    this.currentProject = current;
    this.animate = 1;

    setTimeout(() => {
      this.animate = 0;
    }, 500);
  }
}