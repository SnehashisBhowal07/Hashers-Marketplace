import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { item } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  itemList()
  {
    return this.http.get<item[]>('http://localhost:3000/products');
  }
}
