import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierBackendService } from 'src/app/services/supplier-backend.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  constructor(private backend: SupplierBackendService) { }

  ngOnInit(): void {
    this.backend.getSuppliers().subscribe(
      res => this.fournisseurs = res
    )
  }

  s: Supplier = new Supplier();
  fournisseurs = [];

  save() {
    this.backend.addSupplier(this.s).subscribe(
      r => {
        alert("fournisseur ajouté avec succès !");
        this.ngOnInit();
        this.s = new Supplier();
      }
    )
  }

  fillForm($event) {
    console.log($event);
    this.s = $event;

  }
}
