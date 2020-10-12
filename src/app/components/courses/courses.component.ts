import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoursesService } from "../../services/courses/courses.service";
import { CourseModel } from "../../services/courses/course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  course: CourseModel;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.coursesService.findById(paramMap.get('id'))
          .then(course => this.course = course)
    });
  }
}
