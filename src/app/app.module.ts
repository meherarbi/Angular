import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './product-mgmnt/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './product-mgmnt/list-product/list-product.component';
import { AddCategoryComponent } from './product-mgmnt/add-category/add-category.component';
import { ListCategoryComponent } from './product-mgmnt/list-category/list-category.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierFormComponent } from './supplier-mgt/supplier-form/supplier-form.component';
import { SupplierListComponent } from './supplier-mgt/supplier-list/supplier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    HeaderComponent,
    MenuComponent,
    SupplierFormComponent,
    SupplierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
