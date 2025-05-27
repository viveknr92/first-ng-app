import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <p>home works!</p>
    <p>{{counterValue()}}</p>
    <button (click)="increment()">Increment</button>
    <p>{{title()}}</p>
    <input
      type="text"
      (keyup)="onChangeHandler($event)"
    />
  `,
  styles: ``,
})
export class HomeComponent {
  counterValue = signal(0)
  increment() {
    this.counterValue.update(val => val + 1)
  }
  title = signal('first-ng-app-vivek');
  onChangeHandler = (event: Event) => console.log(event);
}
