import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// importacion del servicio de auntetificacion
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAuthenticated = this.authService.getAuthSession();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }

}
