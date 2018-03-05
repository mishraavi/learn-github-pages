import { BadRequestError } from './../common/bad-request';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

export class DataService {
  constructor(private url, private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
    return this.http.post(this.url, resource)
    .catch (this.errorHandLer);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify('{isRead:true}')).catch(this.errorHandLer);
  }

  deleteResource(id) {
    return this.http.delete(this.url + '/' + id).catch(this.errorHandLer);
  }

  private errorHandLer(error: Response) {
      if (error.status === 400) {
        return Observable.throw(new BadRequestError());
      }
      if ( error.status === 404 ) {
        return Observable.throw(new NotFoundError(error));
      }
      return Observable.throw(new AppError(error));
    }
}
