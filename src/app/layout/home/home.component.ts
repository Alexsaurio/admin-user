import { Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

// importacion modelos
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  userView: User;

  constructor() { }

  ngOnInit(): void {
    this.userView = {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    }
  }

}
