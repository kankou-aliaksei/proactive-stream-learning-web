import { CourseModel } from "../courses/course.model";
import { NewUserModel } from "./new-user.model";

export class CourseEnrollModel {
    course: CourseModel;
    newUser: NewUserModel;
    comment: string;
}