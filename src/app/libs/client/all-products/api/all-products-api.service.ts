import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import {
  AddProductFormModel,
  Product,
  productHttpResponse,
} from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsApiService {
  // Creating a global variable productsArr$ to avoid unnecessary requests to the server
  productsArr$: Observable<productHttpResponse | undefined> =
    this.getAllProducts();

  constructor(private http: HttpClient) {}

  public getAllProducts() {
    return (this.productsArr$ = this.http
      .get<productHttpResponse>(
        'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
      )
      .pipe(
        shareReplay(1),
        catchError((error: HttpErrorResponse) => {
          console.error(error.message);
          return (this.productsArr$ = of(undefined));
        })
      ));
  }

  public addProduct(form: AddProductFormModel) {
    const body = {
      title: form.title,
      description: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };
    return this.http.post<AddProductFormModel>(
      'https://backend-for-applicants.smartoneclub.com/product',
      body
    );
  }

  public addProductImage(productId: number, file: any) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(
      `https://backend-for-applicants.smartoneclub.com/product/${productId}/image`
    );
    return this.http.post<Product>(
      `https://backend-for-applicants.smartoneclub.com/product/${productId}/image`,
      formData
    );
  }

  // TODO Send only modified fields.
  public patchProduct(productId: number, form: AddProductFormModel) {
    const body = {
      title: form.title,
      description: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };
    return this.http.patch<Product>(
      `https://backend-for-applicants.smartoneclub.com/product/${productId}`,
      body
    );
  }

  public delProduct(productId: number) {
    return this.http.delete<Product>(
      `https://backend-for-applicants.smartoneclub.com/product/${productId}`
    );
  }
}
