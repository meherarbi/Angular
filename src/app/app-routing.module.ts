import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './product-mgmnt/add-category/add-category.component';
import { AddProductComponent } from './product-mgmnt/add-product/add-product.component';
import { ListCategoryComponent } from './product-mgmnt/list-category/list-category.component';
import { ListProductComponent } from './product-mgmnt/list-product/list-product.component';
import { SupplierFormComponent } from './supplier-mgt/supplier-form/supplier-form.component';
import { SupplierListComponent } from './supplier-mgt/supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path:'add-category',
    component:AddCategoryComponent
  },
  {
    path:'list-category',
    component:ListCategoryComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'list-product',
    component:ListProductComponent
  },
  {
    path:'add-supplier',
    component:SupplierFormComponent
  },
  {
    path:'list-supplier',
    component:SupplierListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
