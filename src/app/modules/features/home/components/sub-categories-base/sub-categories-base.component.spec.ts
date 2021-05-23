import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesBaseComponent } from './sub-categories-base.component';

describe('SubCategoriesBaseComponent', () => {
  let component: SubCategoriesBaseComponent;
  let fixture: ComponentFixture<SubCategoriesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriesBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
