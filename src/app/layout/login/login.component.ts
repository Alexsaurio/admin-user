import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// importacion de servicio de login
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgError = '';

  userForm: FormGroup = new FormGroup({
    email: new FormControl('eve.holt@reqres.in'),
    password: new FormControl('pistol'),
  });

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(':)')
  }

  login() {
    this.authservice.login(this.userForm.value).subscribe(
      response => {
        this.authservice.loggedInt();
        this.router.navigate(['/home']);
      },
      error => {
        this.msgError = error.error.error;
      }
    )
  }

}
