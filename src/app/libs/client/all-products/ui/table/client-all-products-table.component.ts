import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { productsGetRes, Product } from '../../common/product.interface';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit {
  products$: Observable<productsGetRes> = this.productsService.getAllProducts();

  constructor(private productsService: AllProductsApiService) {}

  ngOnInit() {
    this.products$.subscribe((val) => console.log(val));
  }
}
