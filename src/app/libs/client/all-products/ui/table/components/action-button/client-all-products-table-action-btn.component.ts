import { Component, Input, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { Product } from '../../../../common/product.interface';
@Component({
  selector: 'table-action-btn',
  templateUrl: './client-all-products-table-action-btn.component.html',
  styleUrls: ['./client-all-products-table-action-btn.component.scss'],
})
export class ClientAllProductsTableActionBtnComponent implements OnInit {
  @Input() product!: Product;

  items: MenuItem[] = [];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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
            command: () => {
              this.delete();
            },
          },
        ],
      },
    ];
  }

  delete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
}
