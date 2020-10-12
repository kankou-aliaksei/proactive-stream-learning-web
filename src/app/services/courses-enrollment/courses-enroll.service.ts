import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {CourseEnrollModel} from "./course-enroll.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesEnrollService extends BaseService<CourseEnrollModel> {

  constructor(http: HttpClient) {
    super(http, '/courses/enroll');
  }

  async create(courseEnroll: CourseEnrollModel): Promise<CourseEnrollModel> {
    return super.create(courseEnroll);
  }
}
