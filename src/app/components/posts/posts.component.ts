import { Component, OnInit,OnChanges, Input } from '@angular/core';

// importacion de los servicios
import { UserService } from 'src/app/core/services/user/user.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';

// importacion de modelos
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() public idUser: number;

  postsUser: Post[];
  postsUserLength: number;
  msgError = '';

  constructor(private userservice: UserService, private as: AlertService) { }

  ngOnInit(): void {
    this.getPostsUser(this.idUser);
  }

  ngOnChanges(): void{
    this.getPostsUser(this.idUser);
  }

  getPostsUser(idUser: number){
    this.userservice.getUserPosts(idUser).subscribe(
      response => {
        this.postsUser = response;
        this.postsUserLength =  this.postsUser.length;
      },
      error => {
        this.as.alertError(error.message);
      }
    )
  }


  deletePost(postId: number){
    this.userservice.deleteUserPost(postId).subscribe(
      response =>{
        this.postsUser = this.postsUser.filter(post => post.id !== postId);
        this.postsUserLength =  this.postsUser.length;
        this.as.alertSuccess("Delete post id "+postId)
      },
      error => {
        this.as.alertError(error.message);
      }
    )
  }




}
