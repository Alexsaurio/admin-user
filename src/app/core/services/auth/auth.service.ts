import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public isAuthenticate = false;

  constructor(private http: HttpClient) { }

  login(logObj: Log): Observable<Session>{
    return this.http.post<Session>(this.urlLogin, logObj);
  }

  register(logObj: Log): Observable<Session>{
    return this.http.post<Session>(this.urlRegister, logObj);
  }

  getAuthSession(){
    return this.isAuthenticate;
  }

  loggedInt(){
    this.isAuthenticate = true;
  }
  
  logOut(){
    this.isAuthenticate = false;
  }


}
