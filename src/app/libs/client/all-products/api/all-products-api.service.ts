import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddProductFormModel,
  productsGetRes,
} from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsApiService {
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<productsGetRes> {
    return this.http.get<productsGetRes>(
      'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
    );
  }

  public addProduct(form: AddProductFormModel) {
    const body = {
      title: form.title,
      desctiprion: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };
    return this.http.post<AddProductFormModel>(
      'https://backend-for-applicants.smartoneclub.com/product',
      body
    );
  }
}
