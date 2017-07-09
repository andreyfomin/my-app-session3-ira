import { Component, OnInit } from '@angular/core';
import { UserAlt } from "app/user-alt";
import { GreeterService } from "app/greeter.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user: UserAlt;
  sub;
  id: number;
  alt;

  constructor(private svc: GreeterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.alt = params['alt'] == 'True';
      console.log(params);
      this.user = this.svc.getAllUsers()[this.id];

      // In a real app: dispatch action to load the details here.
    });

  }

}
