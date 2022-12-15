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

  public getAllProducts() {
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
    return this.http.post<AddProductFormModel>(
      'https://backend-for-applicants.smartoneclub.com/product',
      body
    );
  }

  public addProductImage(productId: number, file: any) {
    const body = {
      file,
    };
    return this.http.post<Product>(
      `https://backend-for-applicants.smartoneclub.com/product/${productId}/image`,
      file
    );
  }

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
