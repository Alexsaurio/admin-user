import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importaciones del layout
import { HomeComponent } from './layout/home/home.component';

// importacion del guard
import { AuthGuard } from './core/helpers/auth.guard';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
