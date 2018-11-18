import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
