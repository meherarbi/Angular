import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PrductMgtBackendService } from 'src/app/services/prduct-mgt-backend.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  products: Product[] = [
    {
      "label": "MAC", "shortDescription": "PC Portable", "longDescription": "Catégorie Apple, robuste et rapide",
      "price": 3450, "discount": 15, quantity: 10, "category": {
        "label": "High Tech", "description": "Produits IT"
      }
    },
    {
      "label": "Hwawei", "shortDescription": "Tél Portable", "longDescription": "Catégorie du constructeur chinois, robuste et rapide",
      "price": 650, "discount": 0, quantity: 10, "category": {
        "label": "High Tech", "description": "Produits IT"
      }
    }
  ]; // Syntaxe JSON

  constructor(private backend : PrductMgtBackendService) { }

  ngOnInit(): void {
    this.backend.getProducts().subscribe(
      r => this.products=r
    )
  }

}
