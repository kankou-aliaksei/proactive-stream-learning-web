import { TestBed } from '@angular/core/testing';

import { CoursesEnrollService } from './courses-enroll.service';

describe('CoursesEnrollService', () => {
  let service: CoursesEnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesEnrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
