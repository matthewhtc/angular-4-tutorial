import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses;
  ngOnInit() {
  }
  
  title = "List of courses";
  
  // w/ this, when Angular creates an intance of this component, it looks @this constructor, sees that 
  // sees that this constructor has a dependency; this dependency is of type 'CoursesService'.
  // so, first it creates an instance of 'CoursesService', then passes that to the constructor. 
  // w/ this implementation, if you change the constructor of CoursesService and add a new parameter,
  // we don't have to modify this change in hundreds of places in our code. also helps with unit testing.
  constructor(private courseService: CourseService) {
      this.courses = courseService.getCourses();
  }
  
  onSubmit(form: ngForm) {
    this.courseService.saveCourse(form.value.courseName);
  }

}
