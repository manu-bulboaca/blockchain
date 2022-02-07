import { DataModel } from './../blockchain/block';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-block-details-dialog',
  templateUrl: './block-details-dialog.component.html',
  styleUrls: ['./block-details-dialog.component.scss']
})
export class BlockDetailsDialogComponent {
  block: DataModel = {
    from: '',
    to: '',
    amount: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<BlockDetailsDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
