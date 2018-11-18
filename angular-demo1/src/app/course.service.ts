
export class CourseService {
    courses: string[] = ["course1", "course2", "course3"];
    getCourses() {
        return this.courses;
    }
    
    saveCourse(courseName: string) {
        this.courses.push(courseName);
    }
}