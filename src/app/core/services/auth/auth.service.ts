import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// importacion de environment
import { environment as env } from '../../../../environments/environment';

// importacion de modelos
import { Log } from '../../models/log.model';
import { Session } from '../../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // urls para el consumo de API logeo
  private urlLogin = env.urlUser + 'login';
  private urlRegister = env.urlUser + 'register';

  constructor(private http: HttpClient, private router: Router) { }

  login(logObj: Log): Observable<Session>{
    return this.http.post<Session>(this.urlLogin, logObj);
  }

  register(logObj: Log): Observable<Session>{
    return this.http.post<Session>(this.urlRegister, logObj);
  }

  getAuthSession(){
    return sessionStorage.getItem('isAuth') ? true : false;
  }

  loggedInt(token: string){
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('isAuth', 'success');
    this.router.navigate(['/home']);
  }
  
  logOut(){
    sessionStorage.clear()
    this.router.navigate(['/login']);
  }


}
