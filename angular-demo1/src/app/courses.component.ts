import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>`
})
export class CoursesComponent {
    title = "List of courses";
    courses
    
    // w/ this, when Angular creates an intance of this component, it looks @this constructor, sees that 
    // sees that this constructor has a dependency; this dependency is of type 'CoursesService'.
    // so, first it creates an instance of 'CoursesService', then passes that to the constructor. 
    // w/ this implementation, if you change the constructor of CoursesService and add a new parameter,
    // we don't have to modify this change in hundreds of places in our code. also helps with unit testing.
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}