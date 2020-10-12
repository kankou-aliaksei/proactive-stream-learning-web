import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollmentComponent } from './course-enrollment.component';

describe('CourseSendFormComponent', () => {
  let component: CourseEnrollmentComponent;
  let fixture: ComponentFixture<CourseEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
