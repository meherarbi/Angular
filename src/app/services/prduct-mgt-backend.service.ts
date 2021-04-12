import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrductMgtBackendService {

  constructor(private http : HttpClient) { }

  getCategories()
  {
    return this.http.get<any[]>("http://localhost:3000/categories");
  }

  addCategory(category)
  {
    return this.http.post<any>("http://localhost:3000/categories",category);
  }


  deleteCategory(id)
  {
    return this.http.delete<any>("http://localhost:3000/categories/"+id);
  }


  
  getProducts()
  {
    return this.http.get<any[]>("http://localhost:3000/products");
  }

  addProduct(product)
  {
    return this.http.post<any>("http://localhost:3000/products",product);
  }


  deleteProduct(id)
  {
    return this.http.delete<any>("http://localhost:3000/products/"+id);
  }
}
