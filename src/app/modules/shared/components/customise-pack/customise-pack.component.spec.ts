import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisePackComponent } from './customise-pack.component';

describe('CustomisePackComponent', () => {
  let component: CustomisePackComponent;
  let fixture: ComponentFixture<CustomisePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomisePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
