import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-all-products-table',
  templateUrl: './client-all-products-table.component.html',
  styleUrls: ['./client-all-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
