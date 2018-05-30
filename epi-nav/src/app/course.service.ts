import { Injectable } from '@angular/core';
import { Course } from './models/course.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CourseService {
  courses: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.courses = database.list('courses');
  }

  getCourses() {
    return this.courses;
  }


}
