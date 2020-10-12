import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IgxToastComponent } from "igniteui-angular";
import { CourseEnrollModel } from "../../services/courses-enrollment/course-enroll.model";
import { CourseModel } from "../../services/courses/course.model";
import { NewUserModel } from "../../services/courses-enrollment/new-user.model";
import { CoursesEnrollService } from "../../services/courses-enrollment/courses-enroll.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-course-send-form',
  templateUrl: './course-enrollment.component.html',
  styleUrls: ['./course-enrollment.component.scss']
})
export class CourseEnrollmentComponent implements OnInit {
  @ViewChild('toast')
  toast: IgxToastComponent;
  id: string;

  constructor(private coursesEnrollService: CoursesEnrollService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });
  }

  public async onSubmit(form: NgForm) {
    this.toast.show();

    const course = new CourseModel();
    course.id = this.id;
    const newUser = new NewUserModel();
    newUser.name = form.value.name;
    newUser.phone = form.value.phone;
    newUser.email = form.value.email;
    const courseEnroll = new CourseEnrollModel();
    courseEnroll.course = course;
    courseEnroll.newUser = newUser;
    courseEnroll.comment = form.value.message;

    form.reset();

    await this.coursesEnrollService.create(courseEnroll);
  }

}
