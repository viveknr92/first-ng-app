import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) return todos;
    const text = searchTerm.toLocaleLowerCase();
    return todos.filter((each) => each.title.toLocaleLowerCase().includes(text))
  }

}
