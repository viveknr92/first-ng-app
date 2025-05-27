import { Component, inject, OnInit, signal, output } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  template: `
    <p>TODO works</p>
    @if (!todoItems().length) {
      <p>Loading...</p>
    }
    <ul>
    @for (item of todoItems(); track item.id) {
      <app-todo-item (todoToggled)="onTodoClicked($event)" [item]="item" />
    }
    </ul>
  `,
  styles: `
    .todos {
      display: flex;
      gap: 18px;
    }
  `
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  onTodoClicked(item: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((each) => {
        if (each.id === item.id) {
          return {
            ...each,
            completed: !each.completed
          }
        }
        return each;
      })
    })
  }
  
  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos)
      })
  }
}
