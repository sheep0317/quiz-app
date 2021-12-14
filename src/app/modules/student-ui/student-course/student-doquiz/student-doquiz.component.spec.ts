import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDoquizComponent } from './student-doquiz.component';

describe('StudentDoquizComponent', () => {
  let component: StudentDoquizComponent;
  let fixture: ComponentFixture<StudentDoquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDoquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDoquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
