import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  AddProductFormModel,
  Product,
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
      description: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };

    this.http
      .post<AddProductFormModel>(
        'https://backend-for-applicants.smartoneclub.com/product',
        body
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('add product complete'),
      });
  }

  public patchProduct(productId: number, form: AddProductFormModel) {
    const body = {
      title: form.title,
      description: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };

    this.http
      .patch<Product>(
        `https://backend-for-applicants.smartoneclub.com/product/${productId}`,
        body
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('add product complete'),
      });
  }

  public delProduct(productId: number) {
    return this.http
      .delete<Product>(
        `https://backend-for-applicants.smartoneclub.com/product/${productId}`
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('delate product complete'),
      });
  }
}
