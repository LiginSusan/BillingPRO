import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss'],
})
export class PurchaseOrderComponent implements OnInit {
  constructor() {}
  index: number;
  routinkLinks: Array<string> = [
    '/browse',
    '/compare',
    '/confirmation',
    '/checkout',
  ];
  ngOnInit(): void {
    this.index = 0;
    console.log(this.index);
  }

  previous() {
    this.index = this.index - 1;
    console.log('index:' + this.index);
  }

  next() {
    this.index = this.index + 1;
    console.log('index:' + this.index);
  }
}
