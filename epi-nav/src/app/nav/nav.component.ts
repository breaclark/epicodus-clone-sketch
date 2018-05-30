import { Component, OnInit } from '@angular/core';
import { CourseService } from './../course.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Course } from './../models/course.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [CourseService]
})
export class NavComponent {
  courses: FirebaseListObservable<any[]>;
  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

}
