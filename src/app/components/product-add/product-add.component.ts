import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private productService:ProductService) { }

  ngOnInit(): void {
    this.createProduct();
  }

  createProduct()
  {
    this.productAddForm = this.formBuilder.group(
      {
        productName:["",Validators.required],
        unitPrice:["",Validators.required],
        unitsInStock:["",Validators.required],
        categoryId:["",Validators.required]

      }
    );
  }
  add()
  {
    if (this.productAddForm.valid) {
      let producttModel = Object.assign({},this.productAddForm.value);
      this.productService.addProduct(producttModel).subscribe(response =>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      },responseError=> {
        this.toastrService.error(responseError.message[],"Başarısız")
      });
    
      console.log(producttModel)
    }
    else
    {
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
   
   
    
  }

}
