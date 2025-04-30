import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
})
export class ResaltarDirective {
  private element = inject(ElementRef);

  constructor() {
    console.log(this.element);
    this.element.nativeElement.onmouseenter = () => {
      console.log('Clickeado ', this.element.nativeElement.style.backgroundColor = "yellow");
    };

    this.element.nativeElement.onmouseleave = () => {
      console.log('Clickeado ', this.element.nativeElement.style.backgroundColor = "");
    };
  }
}
