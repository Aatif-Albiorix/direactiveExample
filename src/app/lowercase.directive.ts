import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor() { }

  @HostListener('input', ['$event']) onInput($event: any) 
  {
    var start = $event.target.selectionStart;
    var end = $event.target.selectionEnd;
    $event.target.value = $event.target.value.toLowerCase();
    $event.target.setSelectionRange(start, end);
  }
}
