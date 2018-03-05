import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthorList() {
    return ["a1","a2","a3"];
  }
}
