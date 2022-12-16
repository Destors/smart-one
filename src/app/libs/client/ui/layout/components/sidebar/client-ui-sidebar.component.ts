import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-client-ui-sidebar',
  templateUrl: './client-ui-sidebar.component.html',
  styleUrls: ['./client-ui-sidebar.component.scss'],
})
export class ClientUiSidebarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'All Products',
    //     icon: 'pi pi-pw pi-file',
    //     routerLink: ['all-products-page'],
    //     routerLinkActiveOptions: { exact: true },
    //     command: () => {
    //       this.newItemEvent.emit();
    //     },
    //   },
    //   {
    //     label: 'Selected product',
    //     icon: 'pi pi-fw pi-star',
    //     routerLink: ['selected-products-page'],
    //     routerLinkActiveOptions: { exact: true },
    //     command: () => {
    //       this.newItemEvent.emit();
    //     },
    //   },
    // ];
    this.items = [
      {
        label: 'General',
        icon: 'pi pi-pw pi-file',
        expanded: true,
        items: [
          {
            label: 'All Products',
            icon: 'pi pi-pw pi-file',
            routerLink: ['all-products-page'],
            routerLinkActiveOptions: { exact: true },
            command: () => {
              this.newItemEvent.emit();
            },
          },
          {
            label: 'Selected product',
            icon: 'pi pi-fw pi-star',
            routerLink: ['selected-products-page'],
            routerLinkActiveOptions: { exact: true },
            command: () => {
              this.newItemEvent.emit();
            },
          },
        ],
      },
    ];
  }
}
