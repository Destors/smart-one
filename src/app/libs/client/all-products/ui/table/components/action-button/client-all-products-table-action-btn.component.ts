import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AllProductsApiService } from '../../../../api/all-products-api.service';
import { Product } from '../../../../common/product.interface';
import { ClientEditProductDialogComponent } from '../../../edit-product-dialog/client-edit-product-dialog.component';
@Component({
  selector: 'table-action-btn',
  templateUrl: './client-all-products-table-action-btn.component.html',
  styleUrls: ['./client-all-products-table-action-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService, MessageService, DialogService],
})
export class ClientAllProductsTableActionBtnComponent implements OnInit {
  @Input() product!: Product;
  @Output() newItemEvent = new EventEmitter<string>();

  items: MenuItem[] = [];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private apiService: AllProductsApiService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            command: () => {
              this.showEditProductDialog();
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.deleteProduct();
            },
          },
        ],
      },
    ];
  }

  deleteProduct() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected product?',
      header: 'Delete product',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.delProduct(this.product.id!).subscribe({
          next: (v: any) => console.log(v),
          error: (e: any) => console.error(e),
          complete: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmed',
              detail: 'You have accepted',
            });
            this.newItemEvent.emit();
          },
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
            this.confirmationService.close();
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            this.confirmationService.close();
            break;
        }
      },
    });
  }

  showEditProductDialog() {
    const ref = this.dialogService.open(ClientEditProductDialogComponent, {
      header: 'Edit Product',
      width: '70%',
      data: this.product,
    });
  }
}
