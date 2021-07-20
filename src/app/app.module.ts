import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importaciones de material angular
import {MatIconModule} from '@angular/material/icon';

// importacion de servicios
import { UserService  } from './core/services/user/user.service';
import { AuthService  } from './core/services/auth/auth.service';

// importacion del layout
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';

//importacion de componentes



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // importaciones de material
    MatIconModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
