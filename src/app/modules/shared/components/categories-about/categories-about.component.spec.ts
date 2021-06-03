import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAboutComponent } from './categories-about.component';

describe('CategoriesAboutComponent', () => {
  let component: CategoriesAboutComponent;
  let fixture: ComponentFixture<CategoriesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
