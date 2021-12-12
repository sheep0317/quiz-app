import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudentListComponent } from './student-student-list.component';

describe('StudentStudentListComponent', () => {
  let component: StudentStudentListComponent;
  let fixture: ComponentFixture<StudentStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
