import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackdetailBaseComponent } from './packdetail-base.component';

describe('PackdetailBaseComponent', () => {
  let component: PackdetailBaseComponent;
  let fixture: ComponentFixture<PackdetailBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackdetailBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackdetailBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
