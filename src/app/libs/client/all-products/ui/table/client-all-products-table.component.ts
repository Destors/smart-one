import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { getRes, Product } from '../../common/product.interface';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit {
  products$ = new Observable<getRes>();

  constructor(private productsService: AllProductsApiService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
    this.products$.subscribe((val) => console.log(val.products));
  }
}
