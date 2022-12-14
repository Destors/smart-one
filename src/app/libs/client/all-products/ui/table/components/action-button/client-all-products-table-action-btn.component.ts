import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'table-action-btn',
  templateUrl: './client-all-products-table-action-btn.component.html',
  styleUrls: ['./client-all-products-table-action-btn.component.scss'],
})
export class ClientAllProductsTableActionBtnComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-file-edit',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
    ];
  }
}
