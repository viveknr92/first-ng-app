import { Component, inject, OnInit, signal, output } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError, throwError, timeout } from 'rxjs';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  template: `
    <h2>TODO works</h2>
    @if (!todoItems().length) {
      <p>Loading...</p>
    }
    <form>
      <label>Filter TODOs:</label>
      <input
        placeholder="Search..."
        type="text"
        name="searchTerm"
        [(ngModel)]="searchTerm"
      />
    </form>
    <ul>
      @for (item of todoItems() | filterTodos : searchTerm(); track item.id) {
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
  searchTerm = signal<string>('');

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
      .pipe(timeout({
        each: 5000,
        with: () => throwError(() => new Error('timeout'))
      }))
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
