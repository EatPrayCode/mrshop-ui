import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCustomiseBaseComponent } from './pack-customise-base.component';

describe('PackCustomiseBaseComponent', () => {
  let component: PackCustomiseBaseComponent;
  let fixture: ComponentFixture<PackCustomiseBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCustomiseBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCustomiseBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
