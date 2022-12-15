import { Component, Input, OnInit } from '@angular/core';
import { LocalSyncStorage } from 'src/app/libs/core/storage/local/local-sync.storage';
import { Product } from '../../../../common/product.interface';

@Component({
  selector: 'table-favorites-btn',
  templateUrl: './client-all-products-table-favorites-btn.component.html',
  styleUrls: ['./client-all-products-table-favorites-btn.component.scss'],
})
export class ClientAllProductsTableFavoritesBtnComponent implements OnInit {
  @Input() product!: Product;

  productLocalState!: boolean;

  constructor(private localStorage: LocalSyncStorage) {}

  ngOnInit() {
    this.getProductLocalState(this.product.id!);
  }

  getProductLocalState(id: number) {
    let localData = this.localStorage.getItem(id.toString());
    if (localData) {
      this.productLocalState = true;
    } else this.productLocalState = false;
  }

  setProductLocalState() {
    if (!this.productLocalState) {
      this.localStorage.removeItem(this.product.id!.toString());
      console.log('removed local');
    } else {
      this.localStorage.setItem(
        this.product.id!.toString(),
        this.productLocalState.toString()
      );
      console.log('Add local');
    }
  }
}
