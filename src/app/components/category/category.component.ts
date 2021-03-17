import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  productResponseModel: ListResponseModel<Category> = {
    data: this.categories,
    message: '',
    success: true,
  };
  currentCategory:Category;
  dataLoaded = false;
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    console.log('Category çalıştı');
    this.getProducts();
    this.getCurrentCategoryClass(this.currentCategory);
  }
    
  getProducts(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
      this.dataLoaded = true;
    });

  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
    //console.log(category.categoryName);
    
  }

  getCurrentCategoryClass(category:Category){
    if (category == this.currentCategory) {
      //console.log("eşit");
      return 'list-group-item list-group-item-action active';
    }
    else
    {
      //console.log("eşit değil");
      return 'list-group-item list-group-item-action';
    }
  }
  getAllCategoryClass(){
    if(!this.currentCategory){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
}
}
//[class]="getCurrentCategoryClass(category)"
