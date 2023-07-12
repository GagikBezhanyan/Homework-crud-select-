import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(public el: ElementRef) { 
    // console.log(this.el.nativeElement);
  }

  @HostListener('click') test() {
    console.log(this.el);
    // this.el.nativeElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  }

}
