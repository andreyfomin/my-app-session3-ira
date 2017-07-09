import { Component, OnInit } from '@angular/core';
import { UserAlt } from "app/user-alt";
import { GreeterService } from "app/greeter.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: UserAlt = new UserAlt();

  constructor(private svc : GreeterService) { }

  ngOnInit() {
  }

  onSubmit(val) {
    console.log(val);
    this.svc.addUser(this.user.name, this.user.phone);
  }
}
