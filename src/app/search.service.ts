import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class SearchService {
  counter = 0;

  constructor() { }

  getSuggestions(prefix: string) {

    // Create an observable that emits 0,1,2,3,...
    // every 2 seconds (2000 msec)
    let o1 = Observable.interval(2000);

    // Create a derived observable that emits only the first item
    // from a source observable.
    let o2 = o1.take(1);

    // Create a derived observable that emits a string array for
    // every item emitted from a source observable.
    let o3 = o2.map(r => [prefix + 'aaa', prefix + 'bbb']);

    // The end result is an observable that emits just one string array, and then completes.

    // The above 3 commands can be shortened to this:
    // let o3 = Observable.interval(1000).take(1)
    //   .map(r => [prefix + 'aaa', prefix + 'bbb']);

    // Create two side effects:
    //   1. Log a counter value for every result
    //   2. Throw an error on every 3rd request
    let o4 = o3.do(t => {
      if (this.counter % 3 === 0) throw 'server error';
      console.log('response ' + this.counter);
    });

    this.counter++;
    return o4;
  }

  getCounter() {
    return this.counter;
  }
}
