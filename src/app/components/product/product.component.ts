import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filterText ="";
  productResponseModel: ListResponseModel<Product> = {
    data: this.products,
    message: '',
    success: true,
  };
  dataLoaded = false;
  
  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute,
    private toasterService:ToastrService,
    private cartService:CartService

    ) {}

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })
  }
    
  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });

  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });

  }
  addToCart(product:Product)
  {
    this.cartService.addToCart(product);
    this.toasterService.success("Sepete Eklendi",product.productName)
  }
  
}
