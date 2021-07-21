import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// // importacion de servicio de login
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  msgError = '';

  newUserForm: FormGroup;

  constructor(private authservice: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    this.authservice.register(this.newUserForm.value).subscribe(
      response => {
        this.authservice.loggedInt(response.token);
      },
      error => {
        this.msgError = error.error.error;
      }
    )
  }
}

