import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  newUserForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(':D')
  }

  register() {
    this.authservice.register(this.newUserForm.value).subscribe(
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

