import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../common/product.interface';

@Component({
  selector: 'table-favorites-btn',
  templateUrl: './client-all-products-table-favorites-btn.component.html',
  styleUrls: ['./client-all-products-table-favorites-btn.component.scss'],
})
export class ClientAllProductsTableFavoritesBtnComponent implements OnInit {
  @Input() product!: Product;

  productLocalState!: boolean;

  ngOnInit() {
    this.getProductLocalState(this.product.id!);
  }

  getProductLocalState(id: number) {
    let localData = this.getData(id.toString());
    if (localData) {
      this.productLocalState = true;
    } else this.productLocalState = false;
  }

  setProductLocalState() {
    if (!this.productLocalState) {
      this.removeData(this.product.id!.toString());
      console.log('removed local');
    } else {
      this.saveData(
        this.product.id!.toString(),
        this.productLocalState.toString()
      );
      console.log('Add local');
    }
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}
