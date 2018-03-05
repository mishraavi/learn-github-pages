import { Router } from '@angular/router';
import { GithubFollowersService } from './services/github-followers.service';
import { DataService } from './services/data.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorService } from './services/author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FaviouriteComponent } from './faviourite/faviourite.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewChangePasswordComponent } from './change-password-new/change-password.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FaviouriteComponent,
    CreateCourseComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    NewChangePasswordComponent,
    PostComponentComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostComponentComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthorService,
    PostService,
    GithubFollowersService,
    AppErrorHandler,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
