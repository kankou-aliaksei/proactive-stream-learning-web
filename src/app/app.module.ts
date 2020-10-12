import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CourseEnrollmentComponent } from './components/courses-enrollment/course-enrollment.component';
import { FormsModule } from "@angular/forms";
import { IgxToastModule } from "igniteui-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CourseEnrollmentComponent,
    ContactsComponent,
    CoursesComponent,
    CoachesComponent,
    NotFoundComponent,
    SanitizeHtmlPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        IgxToastModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
