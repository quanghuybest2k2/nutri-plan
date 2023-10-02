import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListExercisePage } from './list-exercise.page';

describe('ListExercisePage', () => {
  let component: ListExercisePage;
  let fixture: ComponentFixture<ListExercisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
