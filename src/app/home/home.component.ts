import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <p>home works!</p>
    <a routerLink="/todos">TODOs</a>
    <p>{{counterValue()}}</p>
    <button (click)="increment()">Increment</button>
    <p>{{title()}}</p>
    <input
      type="text"
      (keyup)="onChangeHandler($event)"
    />
  `,
  styles: `
    p {
      display: flex;
      padding: 10px;
    }
  `,
})
export class HomeComponent {
  counterValue = signal(0)
  increment() {
    this.counterValue.update(val => val + 1)
  }
  title = signal('first-ng-app-vivek');
  onChangeHandler = (event: Event) => console.log(event);
}
