import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicGrid } from '../models/grid.model';
import { ItemDetails } from '../models/jason.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedValue: DynamicGrid = {
    jobCode: '',
    itemCode: '',
    description: '',
    costcenter: '',
    rate: '',
  };
  constructor() {}
  dataSource = new BehaviorSubject<DynamicGrid>(this.selectedValue);
  modifiedData = this.dataSource.asObservable();
  updatedDataSelection(data: ItemDetails) {
    this.dataSource.next(
      new DynamicGrid('', data.Itcode, data.Itdesc, '', data.Rate)
    );
  }
}
