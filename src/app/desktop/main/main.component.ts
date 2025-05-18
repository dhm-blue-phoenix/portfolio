import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { NeedATeamplayerComponent } from './need-a-teamplayer/need-a-teamplayer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    NeedATeamplayerComponent,
    ContactMeComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent { }