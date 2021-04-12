import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupplierBackendService {

  constructor(private http: HttpClient) { }

  addSupplier(supplier)
  {
    return this.http.post<any>(environment.supplier_url,supplier);
  }

  getSuppliers()
  {
    return this.http.get<any[]>(environment.supplier_url);
  }
}
