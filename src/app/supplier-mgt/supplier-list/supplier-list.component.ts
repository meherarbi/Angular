import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  suppliers=[];

  show(row)
  {
    console.log(row);
    this.onShow.emit(row);
  }

  @Output()
  onShow : EventEmitter<Supplier>= new EventEmitter<Supplier>();
}
