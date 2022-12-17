import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AllProductsApiService } from 'src/app/libs/client/all-products/api/all-products-api.service';
import { Product } from 'src/app/libs/client/all-products/common/product.interface';
import { LocalSyncStorage } from 'src/app/libs/core/storage/local/local-sync.storage';

@Component({
  selector: 'app-client-favorite-product-table',
  templateUrl: './client-favorite-product-table.component.html',
  styleUrls: ['./client-favorite-product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFavoriteProductTableComponent implements OnInit {
  products$: Observable<Product[]>;
  favoriteProducts$: Observable<Product[] | undefined> = of(undefined);

  constructor(
    private productsService: AllProductsApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private localStorage: LocalSyncStorage
  ) {
    this.products$ = this.productsService.productsShare$;
    this.favoriteProducts$ = this.getFavoriteProduct(this.products$);
  }

  ngOnInit() {}

  getFavoriteProduct(
    productsArr$: Observable<Product[]>
  ): Observable<Product[] | undefined> {
    return productsArr$.pipe(
      map((val) =>
        val
          .map((x) => {
            x.favorite = this.getProductLocalState(x.id);
            return x;
          })
          .filter((product) => product.favorite)
      )
    );
  }

  getProductLocalState(id: number | undefined): boolean {
    let localData = this.localStorage.getItem(id!.toString());
    return localData ? true : false;
  }

  getProducts() {
    return (this.products$ = this.productsService.getAllProducts());
  }

  updateTable() {
    this.getProducts().subscribe({
      error: (e: any) => console.error(e),
      complete: () => {
        this.favoriteProducts$ = this.getFavoriteProduct(this.products$);
        this.changeDetectorRef.markForCheck();
      },
    });
  }
}
