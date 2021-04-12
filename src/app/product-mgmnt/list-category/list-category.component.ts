import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { PrductMgtBackendService } from 'src/app/services/prduct-mgt-backend.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories:ProductCategory[]=[];

  constructor(private categoryService : ProductCategoryService,
    private backendService : PrductMgtBackendService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.listCategories();
    
    // L'instruction suivante est erronée car on essaye de mapper une opérartion synchrone avec un retour asynchrone
    // this.categories = this.backendService.getCategories();


    this.backendService.getCategories().subscribe(
      response => {
        this.categories = response;
      }
    );

  }

  deleteCategory(category:ProductCategory)
  {
    if(window.confirm("êtes-vous sûr ?"))
    {
      //this.categoryService.deleteCategory(category);
      this.backendService.deleteCategory(category['id']).subscribe(
        result =>
        {
         this.ngOnInit(); 
        }
      );
    }
  }

}
