import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
        .subscribe((response) => {
        this.posts = <any> response;
        console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {
      console.log(input.value);
      let post: any = {title: input.value};
      this.posts.splice(0, 0, post);

      this.service.create(post).subscribe(response => {
          post['id'] = response['id'];
          input.value = '';
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadRequestError) {
            alert('Bad request error');
          } else {
            throw error;
          }
        }
      );
  }

  updatePost(post) {
    this.service.update(post).subscribe(response => {
          console.log(response);
    },
    (error: AppError) => {
      if ( error instanceof NotFoundError ) {
        alert('Record does not founnd');
      } else {
        throw error;
      }
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deleteResource(post.id).subscribe(null,
    (error: AppError) => {
      this.posts.splice(index, 0, post);

      if ( error instanceof NotFoundError ) {
        alert('Record does not founnd');
      } else {
        throw error;
      }
    });
  }

}
