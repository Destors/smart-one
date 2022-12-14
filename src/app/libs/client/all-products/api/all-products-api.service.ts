import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
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
    console.log('serviceStart');
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
      .pipe(
        catchError((err) => {
          console.error(err);
          return of();
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
