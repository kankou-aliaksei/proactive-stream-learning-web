import { Injectable } from '@angular/core';
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { CourseModel } from "./course.model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends BaseService<CourseModel> {
  constructor(http: HttpClient) {
    super(http, '/courses');
  }
}
