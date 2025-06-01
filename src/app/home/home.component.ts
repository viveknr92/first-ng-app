import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomIfDirective } from '../directives/custom-if.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CustomIfDirective],
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
    <div>
      <button (click)="toggleContent()">Toggle Content</button>
      <p *appCustomIf="showContent()">Conditional Content</p>
    </div>
  `,
  styles: `
    p {
      display: flex;
      padding: 10px;
    }
    div {
      padding: 20px;
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

  showContent = signal(false);
  toggleContent() {
    this.showContent.set(!this.showContent())
  }
}
