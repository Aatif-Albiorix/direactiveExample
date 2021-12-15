import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input') onInput(){
  const digit = this.el.nativeElement.value;
  this.el.nativeElement.value = digit.replace(/[^0-9]*/g, '');
  }
}
