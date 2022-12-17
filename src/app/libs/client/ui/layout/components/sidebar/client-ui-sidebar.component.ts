import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NAVIGATION_PATHS } from 'src/app/libs/core/navigation/common/navigation.interface';

@Component({
  selector: 'app-client-ui-sidebar',
  templateUrl: './client-ui-sidebar.component.html',
  styleUrls: ['./client-ui-sidebar.component.scss'],
})
export class ClientUiSidebarComponent implements OnInit {
  @Output() closeSidenavEvent = new EventEmitter<string>();

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'General',
        icon: 'pi pi-pw pi-file',
        expanded: true,
        items: [
          {
            label: 'All Products',
            icon: 'pi pi-pw pi-file',
            routerLink: [NAVIGATION_PATHS.products],
            routerLinkActiveOptions: { exact: true },
            command: () => {
              this.closeSidenavEvent.emit();
            },
          },
          {
            label: 'Selected product',
            icon: 'pi pi-fw pi-star',
            routerLink: [NAVIGATION_PATHS.favorites],
            routerLinkActiveOptions: { exact: true },
            command: () => {
              this.closeSidenavEvent.emit();
            },
          },
        ],
      },
    ];
  }
}
