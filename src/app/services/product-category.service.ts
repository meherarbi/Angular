import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  categories: ProductCategory[] = [];
  constructor() { }

  addCategory(c: ProductCategory) {
    this.categories.push(c);
  }

  listCategories()
  {
    return this.categories;
  }

  deleteCategory(c:ProductCategory)
  {
    let found = this.categories.find(cat => cat.label===c.label && cat.description===c.description);
    let position = this.categories.indexOf(found);
    this.categories.splice(position,1);
  }
}
