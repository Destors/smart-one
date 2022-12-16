import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { productHttpResponse } from '../../common/product.interface';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit {
  products$: Observable<productHttpResponse | undefined>;

  constructor(
    private productsService: AllProductsApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.products$ = this.productsService.productsArr$;
  }

  ngOnInit() {}

  getProducts(): Observable<productHttpResponse | undefined> {
    return (this.products$ = this.productsService.getAllProducts());
  }

  updateTable() {
    this.getProducts().subscribe({
      error: (e: any) => console.error(e),
      complete: () => {
        this.changeDetectorRef.markForCheck();
      },
    });
  }
}
