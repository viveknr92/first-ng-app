import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodoDirective]'
})
export class HighlightCompletedTodoDirectiveDirective {
  isCompleted = input(false);
  el = inject(ElementRef);

  constructor() { }

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.color = 'green'
    } else {
      this.el.nativeElement.style.color = 'black'
    }
  })

}
