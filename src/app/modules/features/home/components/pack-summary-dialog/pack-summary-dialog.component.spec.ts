import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackSummaryDialogComponent } from './pack-summary-dialog.component';

describe('PackSummaryDialogComponent', () => {
  let component: PackSummaryDialogComponent;
  let fixture: ComponentFixture<PackSummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackSummaryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
