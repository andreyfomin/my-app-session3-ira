import { Component, OnInit, Input } from '@angular/core';
import { UserAlt } from "app/user-alt";

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  @Input() user : UserAlt;

  constructor() { }

  ngOnInit() {
  }

}
