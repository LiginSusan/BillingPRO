import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResponse } from '../models/search-result.model';
import { ItemDetails } from '../models/jason.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url = 'http://localhost:4200/api';
  itemArray: Array<ItemDetails> = [];
  dataSource = new BehaviorSubject<Array<ItemDetails>>(this.itemArray);
  modifiedData = this.dataSource.asObservable();

  constructor(private http: HttpClient) {}

  getsearchDetails(searchKey) {
    console.log(searchKey);
    let getSearchDetailsUrl: string = this.url;
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    });

    const body = {
      AccessCode: '@A#SER!11',
      RequestType: 'ITMAST',
      FilterCondition: searchKey,
      ActiveDataBase: 'integraontrack',
    };

    this.http
      .post<SearchResponse>(getSearchDetailsUrl, body, { headers })
      .subscribe((data) => {
        console.log(data.JasonStringData);
        this.itemArray = JSON.parse(data.JasonStringData);
        this.dataSource.next(this.itemArray);
      });
  }
}
