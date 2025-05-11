import { Component } from '@angular/core';

// Import Components
import { HeaderComponent} from './header/header.component';
import { NavbarComponent} from './navbar/navbar.component';
import { WhyMeComponent} from './main/why-me/why-me.component';
import { MySkillsComponent} from './main/my-skills/my-skills.component';
import { MyProjectsComponent} from './main/my-projects/my-projects.component';
import { NeedATeamplayerComponent} from './main/need-a-teamplayer/need-a-teamplayer.component';
import { ContactMeComponent} from './main/contact-me/contact-me.component';
import { FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-desktop',
  imports: [
    // Components
    HeaderComponent,
    NavbarComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    NeedATeamplayerComponent,
    ContactMeComponent,
    FooterComponent
  ],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

}
