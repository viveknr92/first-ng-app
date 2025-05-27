import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <!-- <app-home /> -->
    <router-outlet />
  `,
  styles: ``
})
export class AppComponent {
}
