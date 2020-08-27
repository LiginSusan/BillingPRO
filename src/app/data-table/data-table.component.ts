import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicGrid } from '../models/grid.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service';
import { SearchService } from '../service/search.service';
import { ItemDetails } from '../models/jason.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['index', 'itemCode', 'description', 'rate'];
  dataSource = new MatTableDataSource<ItemDetails>();
  selectedResult: ItemDetails;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private modalService: NgbModal,
    private dataservice: DataService,
    private searchService: SearchService
  ) {}
  itemArray: Array<ItemDetails>;

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
    rate: '',
  };
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5];

  ngOnInit(): void {
    this.dataservice.modifiedData.subscribe((data) => {
      this.dynamicArray.splice(this.dynamicArray.length - 1, 0, data);
      this.hidePopup();
    });
    this.searchService.modifiedData.subscribe((data) => {
      this.length = data.length;
      this.pageSize = 5;
      this.pageSizeOptions=[5];
      this.dataSource = new MatTableDataSource<ItemDetails>(data);
      this.dataSource.paginator = this.paginator;
      this.isSearchTriggered = false;
    });
  }
  selectcontent(row: ItemDetails) {
    this.selectedResult = row;
    this.dataservice.updatedDataSelection(this.selectedResult);
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addRow() {
    this.newDynamic = {
      jobCode: '',
      itemCode: '',
      description: '',
      costcenter: '',
      rate: '',
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
          this.isSearchTriggered = false;
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.isSearchTriggered = false;
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

  search(searchKey) {
    this.isSearchTriggered = true;
    this.searchService.getsearchDetails(searchKey.value);

    // this.searchService.getsearchDetails(searchKey.value).subscribe(data => {
    //   this.itemArray= JSON.parse(data.JasonStringData);
    //   this.dataSource = new MatTableDataSource<ItemDetails>(this.itemArray);
    //   this.isSearchTriggered = false;

    // });
  }

  hidePopup() {
    this.isSearchTriggered = false;
    this.modalService.dismissAll('Canceled Operation');
  }
}
