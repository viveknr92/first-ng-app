import { Component, input, output } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HighlightCompletedTodoDirectiveDirective } from '../directives/highlight-completed-todo-directive.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirectiveDirective],
  template: `
    <li appHighlightCompletedTodoDirective [isCompleted]="item().completed" class="todos">
      <input id="todo-{{item().id}}" type="checkbox" [checked]="item().completed" (change)="this.onTodoClicked()" />
      <label for="todo-{{item().id}}">{{item().title}}</label>
    </li>
  `,
  styles: ``,
})
export class TodoItemComponent {
  item = input.required<Todo>();
  todoToggled = output<Todo>();

  onTodoClicked() {
    this.todoToggled.emit(this.item());
  }
}
