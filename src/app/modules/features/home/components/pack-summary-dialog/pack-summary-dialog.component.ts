import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pack-summary-dialog',
  templateUrl: './pack-summary-dialog.component.html',
  styleUrls: ['./pack-summary-dialog.component.scss']
})
export class PackSummaryDialogComponent implements OnInit {

  currentPack: any = {};

  constructor(
    public dialogRef: MatDialogRef<PackSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.currentPack = data.pack;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

}
