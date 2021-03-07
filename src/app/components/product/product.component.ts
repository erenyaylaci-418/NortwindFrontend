import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  }
  product2: any = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 2,
    unitPrice: 15,
  }
  product3: any = {
    productId: 3,
    productName: 'Tablet Pc',
    categoryId: 2,
    unitPrice: 7,
  }
  products = [this.product1, this.product2, this.product3];

  constructor() { }

  ngOnInit(): void {
  }

}
