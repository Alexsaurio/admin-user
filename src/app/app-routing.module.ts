import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importaciones del layout
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
