import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor( private element: ElementRef) { 
    element.nativeElement.style.color="#fff";
    element.nativeElement.style.background="#e35e6b";
    element.nativeElement.style.margin="12px 12px 0px 0px";
    element.nativeElement.style.width="150px";
    element.nativeElement.style.height="35px";

  }

}
