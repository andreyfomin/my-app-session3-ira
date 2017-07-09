import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Directive({
  selector: '[appKeyupDebounced]'
})
export class KeyupDebouncedDirective {
  @Output('appKeyupDebounced') keyupDebounced: EventEmitter<any> = new EventEmitter<any>();

  // This will emit the source keyup events as they arrive
  // without any debouncing.
  keyUpSource : Observable<any>;

  constructor(private el: ElementRef) {
    console.log('el', this.el.nativeElement);
    this.keyUpSource = Observable.fromEvent(this.el.nativeElement, 'keyup');
    this.keyUpSource

      // Create a derived observable which debounces emitted items
      // from a source observable using a 500msec interval.
      .debounceTime(500)

      // For every event emitted after debouncing, emit one event
      // from the directive's output channel.
      .subscribe(r => this.keyupDebounced.emit(r));
  }

}
