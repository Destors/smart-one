import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-selected-products-page',
  templateUrl: './client-selected-products-page.component.html',
  styleUrls: ['./client-selected-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSelectedProductsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
