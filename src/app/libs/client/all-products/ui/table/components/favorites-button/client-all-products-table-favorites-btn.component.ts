import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../../../common/product.interface';

@Component({
  selector: 'table-favorites-btn',
  templateUrl: './client-all-products-table-favorites-btn.component.html',
  styleUrls: ['./client-all-products-table-favorites-btn.component.scss'],
})
export class ClientAllProductsTableFavoritesBtnComponent implements OnInit {
  @Input() product!: Product;
  form!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      favorites: new FormControl(null),
    });
  }
}
