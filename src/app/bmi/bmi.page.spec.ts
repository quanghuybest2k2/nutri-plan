import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BMIPage } from './bmi.page';

describe('BMIPage', () => {
  let component: BMIPage;
  let fixture: ComponentFixture<BMIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BMIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
