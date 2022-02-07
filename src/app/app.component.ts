import { BlockDetailsDialogComponent } from './block-details-dialog/block-details-dialog.component';
import { Blockchain } from './blockchain/blockchain';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Block, DataModel } from './blockchain/block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blockchain';
  blockchain: Blockchain = Blockchain.create(2);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
      this.blockchain.addBlock('Somebody', 'Anybody', 10);
      this.blockchain.addBlock('Somebody', 'Anybody', 20);
      this.blockchain.addBlock('Somebody', 'Anybody', 1320);
      this.blockchain.addBlock('Somebody', 'Anybody', 140);
      this.blockchain.addBlock('Somebody', 'Anybody', 10);
      this.blockchain.addBlock('Somebody', 'Anybody', 140);
      
  }  

  addBlock(): void {
    const dialogRef = this.dialog.open(BlockDetailsDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: DataModel) => {
      const newBlock = this.blockchain.addBlock(result.from, result.to, result.amount);
    });
  }
}
