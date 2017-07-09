import { Component, OnInit, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { SearchService } from "app/search.service";
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  sub: Subscription;
  theValue: string;
  suggestions: string[];
  count: number;
  error;

  // Create an event emitter which emits asynchronous
  // requests for search suggestions. The event emitter
  // emits objects of type Observable<string[]>, meaning
  // an asynchronous operation which returns a string array.
  ev = new EventEmitter<Observable<string[]>>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // Store the subscription object, for later release in ngOnDestroy.
    this.sub = this.ev
      .switchMap(r => r)
      .subscribe(sugg => {
        delete this.error; // Clear the error condition
        this.count = this.searchService.getCounter(); // Record service call count
        this.suggestions = sugg; // Use latest suggestions array
      },
      err => {
        // This is the error handler, it should not be called,
        // because we are catching and ignoring all errors
        // in the source observable (see getSuggestions() below)
        this.error = err;
      },
      () => {
        // This is the complete handler, it should never be called,
        // since an event emitter never completes by itself.
        console.log('complete');
      });
  }

  ngOnDestroy(): void {
    // Release the subscription
    this.sub.unsubscribe();
  }

  getSuggestions() {

    // Create an asynchronous request to retrieve suggestions.
    // Note that we do not subscribe to it at this point, we
    // just emit it to the 'ev' emitter.
    let req = this.searchService
      .getSuggestions(this.theValue)

      // Create a derived observable that logs and ignores
      // all errors from a source observable (the getSuggetions()
      // call above)
      .catch(err => {
        console.log('inner error', err);
        this.error = err;
        return Observable.empty()
      });

    // Take the observable and emit it to 'ev'.
    this.ev.emit(req);
  }
}
