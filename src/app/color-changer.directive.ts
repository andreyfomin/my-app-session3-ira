import { Directive, HostListener, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {
  @Input() appColorChanger : string;
  @HostBinding("style.color") color: string;
  @HostListener('click') myClick(e) {
    this.color = this.appColorChanger;
  }

  constructor(private el: ElementRef) {

  }

}
