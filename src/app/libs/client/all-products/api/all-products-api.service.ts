import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  Observable,
  of,
  retry,
  shareReplay,
  throwError,
} from 'rxjs';
import {
  AddProductFormModel,
  Product,
  ProductHttpResponse,
} from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsApiService {
  // Creating a global variable productsArr$ to avoid unnecessary requests to the server
  productsArr$: Observable<ProductHttpResponse | undefined> =
    this.getAllProducts();

  constructor(private http: HttpClient) {}

  public getAllProducts() {
    return (this.productsArr$ = this.http
      .get<ProductHttpResponse>(
        'https://backend-for-applicants.smartoneclub.com/products?limit=0&skip=0&ordering=id'
      )
      .pipe(retry(3), shareReplay(1), catchError(this.handleError)));
  }

  public addProduct(form: AddProductFormModel) {
    const body = {
      title: form.title,
      description: form.description,
      price: form.price,
      brand: form.brand,
      category: form.category,
    };
    return this.http
      .post<AddProductFormModel>(
        'https://backend-for-applicants.smartoneclub.com/product',
        body
      )
      .pipe(catchError(this.handleError));
  }

  public addProductImage(productId: number, file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post(
        `https://backend-for-applicants.smartoneclub.com/product/${productId}/image`,
        formData
      )
      .pipe(catchError(this.handleError));
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
    return this.http
      .patch<Product>(
        `https://backend-for-applicants.smartoneclub.com/product/${productId}`,
        body
      )
      .pipe(catchError(this.handleError));
  }

  public delProduct(productId: number) {
    return this.http
      .delete<Product>(
        `https://backend-for-applicants.smartoneclub.com/product/${productId}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
