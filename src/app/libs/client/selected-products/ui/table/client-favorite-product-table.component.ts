import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AllProductsApiService } from 'src/app/libs/client/api/all-products-api.service';
import { Product } from 'src/app/libs/client/all-products/common/product.interface';
import { LocalSyncStorage } from 'src/app/libs/core/storage/local/local-sync.storage';

@Component({
  selector: 'app-client-favorite-product-table',
  templateUrl: './client-favorite-product-table.component.html',
  styleUrls: ['./client-favorite-product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFavoriteProductTableComponent implements OnInit {
  favoriteProducts$: Observable<Product[] | undefined>;

  constructor(
    private productsService: AllProductsApiService,
    private localStorage: LocalSyncStorage
  ) {
    this.favoriteProducts$ = this.getFavoriteProduct();
  }

  ngOnInit() {}

  getFavoriteProduct(): Observable<Product[] | undefined> {
    return this.productsService.productsShare$.pipe(
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

  updateTable() {
    this.productsService.updateProducts();
  }
}
