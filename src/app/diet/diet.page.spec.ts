import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DietPage } from './diet.page';

describe('DietPage', () => {
  let component: DietPage;
  let fixture: ComponentFixture<DietPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
