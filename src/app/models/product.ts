import { ProductCategory } from "./product-category";

export class Product {

    label : string;
    shortDescription : string;
    longDescription : string;
    price : number;
    quantity : number;
    discount : number;
    category : ProductCategory;
    
}