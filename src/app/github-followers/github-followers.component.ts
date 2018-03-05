import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(followers => this.followers = <any>followers
      , (error: AppError) => {
          if ( error instanceof NotFoundError ) {
            alert('url not found');
          } else {
              throw error;
          }
      });
  }

}
