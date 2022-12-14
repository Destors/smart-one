import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getRes, Product } from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsApiService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<getRes> {
    return this.http.get<getRes>(
      'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
    );
  }
}
