import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { CourseEnrollmentComponent } from "./components/courses-enrollment/course-enrollment.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { CoachesComponent } from "./components/coaches/coaches.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'enroll-course/:id', component: CourseEnrollmentComponent },
  { path: 'courses/:id', component: CoursesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
