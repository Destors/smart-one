import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsGetRes } from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsApiService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<productsGetRes> {
    return this.http.get<productsGetRes>(
      'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
    );
  }
}
