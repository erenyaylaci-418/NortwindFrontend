import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productResponseModel: ListResponseModel<Product> = {
    data: this.products,
    message: '',
    success: true,
  };
  dataLoaded = false;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('product çalıştı');
    this.getProducts();
  }
    
  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });

  }
  
}
