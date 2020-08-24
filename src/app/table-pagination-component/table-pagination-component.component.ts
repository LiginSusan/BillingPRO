import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DynamicGrid } from '../models/grid.model';

const ELEMENT_DATA: DynamicGrid[] = [
  {
    jobCode: 'Jobcode1',
    itemCode: 'ItemCode1',
    description: 'desc 1',
    costcenter: 'CS1',
    amount: 'amount1',
  },
  {
    jobCode: 'Jobcode2',
    itemCode: 'ItemCode2',
    description: 'desc 2',
    costcenter: 'CS2',
    amount: 'amount2',
  },
];

@Component({
  selector: 'app-table-pagination-component',
  templateUrl: './table-pagination-component.component.html',
  styleUrls: ['./table-pagination-component.component.scss'],
})
export class TablePaginationComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'jobCode',
    'itemCode',
    'description',
    'costcenter',
    'amount',
  ];
  dataSource = new MatTableDataSource<DynamicGrid>(ELEMENT_DATA);
  selectedResult: DynamicGrid;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {}

  submit(row: DynamicGrid) {
    this.selectedResult = row;
    console.log(this.selectedResult);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
