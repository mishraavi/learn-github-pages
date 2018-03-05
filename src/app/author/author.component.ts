import { AuthorService } from './../services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  title = 'Author List';
  authers: any [];
  constructor(public authorlist: AuthorService) {
    console.log(this.authorlist);
    this.authers = this.authorlist.getAuthorList();
  }

  ngOnInit() {
  }

}
