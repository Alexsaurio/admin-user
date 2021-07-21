import { Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// importacion modelos
import { User } from 'src/app/core/models/user.model';

// importacion de servicios
import { UserService } from 'src/app/core/services/user/user.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  userView: User = {
    id: 1,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  isEdit: Boolean = false;

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userservice: UserService, private as: AlertService) { }

  ngOnInit(): void {
    this.getUserDetail(2);
  }

  getUserDetail(userId: number){
    this.userservice.getUserDetail(userId).subscribe(
      response => {
        this.userView = response.data;
        this.newFormUser(response.data.first_name + " " + response.data.last_name, '')
      },
      error => {
        this.as.alertError(error.message);
      }
    )
  }

  newFormUser(name: string, job: string){
    this.userForm = this.fb.group
    ({
      name: new FormControl(name),
      job: new FormControl(job),
    });
  }

  changeEdit(){
    this.isEdit = !this.isEdit;
  }

  updateUser(){
    this.userservice.putUserDetail(this.userView.id, this.userForm.value).subscribe(
      response => {
        this.newFormUser(response.name, response.job);
        this.userView.first_name = response.name;
        this.changeEdit();
        this.as.alertSuccess("Update user name: " + response.name + " job: " + response.job + " "  + response.updatedAt)
      },
      error => {
        this.as.alertError(error.error.error);
      }
    )
  }
}
