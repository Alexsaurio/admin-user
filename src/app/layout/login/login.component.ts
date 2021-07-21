import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// importacion de servicio de login
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgError = '';
  userForm: FormGroup;

  constructor(private authservice: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authservice.login(this.userForm.value).subscribe(
      response => {
        this.authservice.loggedInt(response.token);
      },
      error => {
        this.msgError = error.error.error;
      }
    )
  }

}
