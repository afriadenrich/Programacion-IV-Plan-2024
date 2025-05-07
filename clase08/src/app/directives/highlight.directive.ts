import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private element = inject(ElementRef);
  color = input("yellow");

  constructor() { 
    this.element.nativeElement.onmouseenter = () => {
      console.log('Clickeado ', this.element.nativeElement.style.backgroundColor = this.color());
    };

    this.element.nativeElement.onmouseleave = () => {
      console.log('Clickeado ', this.element.nativeElement.style.backgroundColor = "");
    };
  }
}
