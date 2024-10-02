import { Component, NgModule, OnInit } from '@angular/core';
import { ItemService } from "../services/item.service";
import { item } from '../data-type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports:[CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
 itemList : undefined | item[]
 deleteMessage: undefined | string;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  deleteProduct(id: number) {
    console.warn('test id', id);
    this.itemService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = 'Product is deleted';
        this.loadItems();
      }
    });
    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }

  loadItems(): void {
    this.itemService.itemList().subscribe((result)=>
    {
      console.warn(result)
      this.itemList = result
    })
  }

  
}