import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCheckoutComponent } from './pack-checkout.component';

describe('PackCheckoutComponent', () => {
  let component: PackCheckoutComponent;
  let fixture: ComponentFixture<PackCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
