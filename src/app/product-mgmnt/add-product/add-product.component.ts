import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PrductMgtBackendService } from 'src/app/services/prduct-mgt-backend.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private categoryProductService : ProductCategoryService,
    private backend : PrductMgtBackendService) { }

  p : Product = new Product();

  options = [];


  ngOnInit(): void {
    // this.options = this.categoryProductService.listCategories();
    this.backend.getCategories().subscribe(
      r => this.options=r
    )
  }


  save()
  {

    alert("Vous avez ajouté "+this.p.label+" avec succès !");
    console.log(this.p.label);
    console.log(this.p.category);
    //
    this.backend.addProduct(this.p).subscribe(
      res => alert("produit ajouté avec succès !")
    );

  }
}
