import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserAlt } from "app/user-alt";

@Component({
  selector: 'app-user-alt',
  templateUrl: './user-alt.component.html',
  styleUrls: ['./user-alt.component.css']
})
export class UserAltComponent implements OnInit {
  @Input() user : UserAlt;
  @Output() userClick : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  wasClicked(value : number) {
    this.userClick.emit(value);
  }
}
