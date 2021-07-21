import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// importacion de environment
import { environment as env } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // urls para el consumo de API usuarios
  private urlUsers = env.urlUser + 'users';

  // urls para el consumo de API post
  private urlPosts = env.urlPost + 'posts?userId=';
  private urlPost = env.urlPost + 'posts/';

  constructor(private http: HttpClient) { }

  getUserDetail(userId: number): Observable<any> {
    return this.http.get<any>(this.urlUsers + '/' + userId);
  }

  getUserPage(page: number): Observable<any> {
    return this.http.get<any>(this.urlUsers + '?page=' + page);
  }

  putUserDetail(userId: number, objUser: any): Observable<any> {
    return this.http.put<any>(this.urlUsers + "/" + userId, objUser);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get<any>(this.urlPosts + userId);
  }

  deleteUserPost(postId: number): Observable<any> {
    return this.http.delete<any>(this.urlPost + postId);
  }

}
