import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input() 
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onCourseViewed() { 
    console.log('course clicked');
    this.courseEmitter.emit(this.course);
  }

  imageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyle() {
    return {
      'text-decoration' : 'underline'
    }
  }

}
