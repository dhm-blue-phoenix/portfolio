import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import Components
import { DesktopComponent } from './desktop/desktop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    
    // Components
    DesktopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
