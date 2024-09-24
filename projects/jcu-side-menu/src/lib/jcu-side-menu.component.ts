import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-jcu-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './jcu-side-menu.component.html',
  styles: ``
})
export class JcuSideMenuComponent {

  isAuthenticated = input(false);
  title = input('JCU');
  subTitle = input('Library');

  titleColor = input<TitleColor>(TitleColor.purple);

  onSignOut = output();
  onSignIn = output();

}
