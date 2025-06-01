import { Directive, input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnChanges {
  appCustomIf = input.required()

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appCustomIf()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
