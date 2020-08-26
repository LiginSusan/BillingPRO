import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss'],
})
export class PurchaseOrderComponent implements OnInit {
  constructor(private router: Router) {}
  index: number;
  routerurl: string;
  routinkLinks: Array<string> = ['/main/order/', '/main/order/persondetails'];
  ngOnInit(): void {
    this.index = 0;
    console.log(this.index);
  }

  previous() {
    this.index = this.index - 1;
    this.routerurl = this.routinkLinks[this.index];
    console.log('index:' + this.index, this.routerurl);
    this.router.navigate([this.routerurl]);
  }

  next() {
    this.index = this.index + 1;
    console.log('index:' + this.index);
    this.routerurl = this.routinkLinks[this.index];
    console.log('index:' + this.index, this.routerurl);
    this.router.navigate([this.routerurl]);
  }
}
