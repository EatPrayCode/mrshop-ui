import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCustomiseComponent } from './pack-customise.component';

describe('PackCustomiseComponent', () => {
  let component: PackCustomiseComponent;
  let fixture: ComponentFixture<PackCustomiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCustomiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCustomiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
