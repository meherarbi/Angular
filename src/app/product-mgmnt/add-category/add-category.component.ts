import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrductMgtBackendService } from 'src/app/services/prduct-mgt-backend.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private categoryService: ProductCategoryService,
    private backendService: PrductMgtBackendService) { }

  ngOnInit(): void {

    this.addCategoryForm = this.formBuilder.group({
      label: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', Validators.minLength(10)]
    })

  }

  reset() {
    this.addCategoryForm.reset();
  }
  save() {
    if(this.addCategoryForm.invalid)
    {
      alert("Veuillez corriger les saisies !");
    }
    else{
      
      //this.categoryService.addCategory(this.addCategoryForm.value);
      
      this.backendService.addCategory(this.addCategoryForm.value).subscribe(
        res => {
          alert("Ajout avec succès !");
        }
      );
      
      this.addCategoryForm.reset();
    }
  }

}
