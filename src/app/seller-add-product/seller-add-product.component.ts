import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { item } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit{
  addProductMessage: string | undefined;
  constructor(private product:ItemService){}
  ngOnInit(): void {
    
  }

  productAdd(data: item) {
    this.product.additionProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product added successfully';
      }
    });
    console.warn(this.addProductMessage)
    setTimeout(() => {this.addProductMessage = undefined}, 5000);
  }
}
