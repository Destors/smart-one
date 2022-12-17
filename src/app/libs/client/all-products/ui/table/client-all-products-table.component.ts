import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { finalize, Observable, Subscription, tap } from 'rxjs';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { Product, ProductHttpResponse } from '../../common/product.interface';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  subscriptions: Subscription = new Subscription();

  constructor(
    private productsService: AllProductsApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.products$ = this.productsService.productsShare$;
  }

  ngOnInit() {}

  updateTable() {
    this.subscriptions.add(
      this.productsService
        .getAllProducts()
        .pipe(
          finalize(() => {
            this.products$ = this.productsService.productsShare$;
            this.changeDetectorRef.markForCheck();
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
