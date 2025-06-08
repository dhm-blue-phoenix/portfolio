import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { HeaderComponent} from './header/header.component';
import { NavbarComponent} from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './desktop.component.html',
  styleUrls: [
    '../response/mobile/mobile.scss',
    './desktop.component.scss'
  ]
})

export class DesktopComponent {}