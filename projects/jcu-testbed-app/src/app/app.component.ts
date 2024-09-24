import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JcuSideMenuComponent, TitleColor } from 'jcu-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JcuSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcu-testbed-app';

  TitleColor = TitleColor;

  isAuthenticated = signal(false);

}
