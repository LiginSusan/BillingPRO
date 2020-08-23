import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from '../models/grid.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor() {}

  dynamicArray: Array<DynamicGrid> = [];
  index = 0;
  newDynamic: DynamicGrid;
  selectedRowObject: DynamicGrid = {
    jobCode: '',
    itemCode: '',
    description: '',
    costcenter: '',
    amount: '',
  };
  ngOnInit(): void {}
  addRow() {
    //console.log("add index"+index);
    this.newDynamic = {
      jobCode: '',
      itemCode: '',
      description: '',
      costcenter: '',
      amount: '',
    };
    this.dynamicArray.push(this.newDynamic);
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    console.log('delete index' + index);
    this.dynamicArray.splice(index, 1);
    return true;
  }

  // openNav(gridRow) {
  //   this.selectedRowObject = gridRow;
  //   document.getElementById("mySidenav").style.width = "400px";
  //   document.getElementById("main").style.marginLeft = "400px";
  // }

  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }
}
