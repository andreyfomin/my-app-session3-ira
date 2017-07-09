import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { GreeterService } from "app/greeter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  v1 : number;
  v2 : number;
  obs : Observable<number>;

  constructor(private svc: GreeterService) {
    // Create a 'cold' observable which emits numbers 0,1,2,3...
    // indefinitely, every 1 second.
    this.obs = Observable.interval(1000);

    // Subscribe to the observable, update field 'v1' to the
    // value of the emitted items, as they arrive
    this.obs.subscribe(value => this.v1 = value);
  }

  subAgain() {
    // Subscribe to the observable again, update field 'v2' to the
    // value of the emitted items, as they arrive.
    // Since this is a cold observable, each subsription gets a new
    // sequence of numbers starting from 0.
    this.obs.subscribe(value => this.v2 = value);
  }

  updateUser() {
    this.svc.updateUser(2, { name: "sdfsdf", phone: "dfgdfg", date: new Date() })
      .subscribe();
  }
}
