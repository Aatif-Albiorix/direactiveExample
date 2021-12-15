import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAvoidSpecialCharacter]'
})
export class AvoidSpecialCharacterDirective {

  constructor(private el: ElementRef) { }

  regexStr = '^[a-zA-Z0-9_]*$';

    @HostListener('keypress', ['$event']) onKeyPress(event: any) {
        return new RegExp(this.regexStr).test(event.key);
    }

    @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
      this.validateFields(event);
    }

    validateFields(event: ClipboardEvent) {
      event.preventDefault();
      const pasteData = event.clipboardData?.getData('text/plain').replace(/[^a-zA-Z0-9 -]/g, '');
      document.execCommand('insertHTML', false, pasteData);
    }

}