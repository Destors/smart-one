import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { Product } from '../../common/product.interface';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productsService: AllProductsApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.products$ = this.productsService.productsShare$;
  }

  ngOnInit() {}

  updateTable() {
    this.productsService.updateProducts();
  }
}
