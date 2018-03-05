import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
 courses = [
    {id: 1, courseType: 'Art'},
    {id: 2, courseType: 'Development'},
    {id: 3, courseType: 'Languages'}
  ];
  createCourse(createCourse) {
    console.log(createCourse);
  }
}
