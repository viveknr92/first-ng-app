import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  // todoItems: Array<Todo> = [{
  //   id: 1,
  //   userId: 1,
  //   completed: false,
  //   title: 'mock title 1',
  // }, {
  //   id: 2,
  //   userId: 2,
  //   completed: false,
  //   title: 'mock title 2',
  // }]

  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Array<Todo>>(url);
  }

  constructor() { }
}
