import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from '../models/grid.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  dynamicArray: Array<DynamicGrid> = [];
  index = 0;
  newDynamic: DynamicGrid;
  closeResult: string;
  purchaseOrderDetailsform;
  isSearchTriggered: boolean = false;
  selectedRowObject: DynamicGrid = {
    jobCode: '',
    itemCode: '',
    description: '',
    costcenter: '',
    amount: '',
  };
  ngOnInit(): void {}
  addRow() {
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

  open(content, gridRow) {
    this.selectedRowObject = gridRow;

    this.modalService
      .open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  search() {
    this.isSearchTriggered = true;
    console.log('submit');
  }
}
