import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestManagementComponent } from './student-test-management.component';

describe('StudentTestManagementComponent', () => {
  let component: StudentTestManagementComponent;
  let fixture: ComponentFixture<StudentTestManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTestManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
