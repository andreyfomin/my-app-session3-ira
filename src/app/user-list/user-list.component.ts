import { Component, OnInit } from '@angular/core';
import { UserAlt } from "app/user-alt";
import { GreeterService } from "app/greeter.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  allUsers: Observable<UserAlt[]>;

  constructor(private svc: GreeterService) { }

  ngOnInit() {
    this.allUsers = this.svc.getAllUsersLive();
  }

}
