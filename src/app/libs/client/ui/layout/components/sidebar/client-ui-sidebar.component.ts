import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-client-ui-sidebar',
  templateUrl: './client-ui-sidebar.component.html',
  styleUrls: ['./client-ui-sidebar.component.scss'],
})
export class ClientUiSidebarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'All Products',
        icon: 'pi pi-pw pi-file',
        routerLink: ['all-products-page'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Selected product',
        icon: 'pi pi-fw pi-star',
        routerLink: ['selected-products-page'],
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }
}
