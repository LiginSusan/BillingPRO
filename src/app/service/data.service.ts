import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicGrid } from '../models/grid.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedValue: DynamicGrid = {
    jobCode: '',
    itemCode: '',
    description: '',
    costcenter: '',
    amount: '',
  };
  constructor() {}
  dataSource = new BehaviorSubject<DynamicGrid>(this.selectedValue);
  modifiedData = this.dataSource.asObservable();
  updatedDataSelection(data: DynamicGrid) {
    this.dataSource.next(data);
  }
}
