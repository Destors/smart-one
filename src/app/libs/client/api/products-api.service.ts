import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  map,
  Observable,
  shareReplay,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import {
  AddProductFormModel,
  Product,
  ProductHttpResponse,
} from '../all-products/common/product.interface';

@Injectable({
  providedIn: 'root',
})

// Important, All error throws from ServerErrorInterceptor
export class ProductsApiService {
  // Creating a global productsShare$ to avoid unnecessary requests to the server when route change.
  productsShare$: Observable<Product[]>;

  // Creating a global updateProductsEvent$...
  // to send new requests to the server when the data changes (via the switch map trigger),
  // without using manual subscriptions..
  updateProductsEvent$ = new Subject();

  constructor(private http: HttpClient) {
    this.productsShare$ = this.updateProductsEvent$.pipe(
      startWith(''),
      switchMap(() => this.getAllProducts()),
      shareReplay(1)
    );
  }

  public updateProducts() {
    // Use for fetching new data from the server
    this.updateProductsEvent$.next('fetching update');
  }

  public getAllProducts(): Observable<Product[]> {
    console.log('fetching...');
    return this.http
      .get<ProductHttpResponse>(
        'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
      )
      .pipe(map((val) => val.products));
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
    return this.http.post(
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
