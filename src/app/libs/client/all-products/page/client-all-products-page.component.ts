import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-all-products-page',
  templateUrl: './client-all-products-page.component.html',
  styleUrls: ['./client-all-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
