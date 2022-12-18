import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
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
import { Subscription } from 'rxjs';
import { ProductsApiService } from '../../../../../api/products-api.service';
import { Product } from '../../../../common/product.interface';
import { ClientEditProductDialogComponent } from '../../../edit-product-dialog/client-edit-product-dialog.component';
@Component({
  selector: 'table-action-btn',
  templateUrl: './client-all-products-table-action-btn.component.html',
  styleUrls: ['./client-all-products-table-action-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService, DialogService],
})
export class ClientAllProductsTableActionBtnComponent
  implements OnInit, OnDestroy
{
  @Input() product!: Product;
  @Output() updateTableEvent = new EventEmitter<string>();

  private dialogCloseSubscription = new Subscription();

  items: MenuItem[] = [];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private apiService: ProductsApiService,
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
          error: (e) => console.error(e),
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmed',
              detail: 'Product deleted',
            });
            this.updateTableEvent.emit();
          },
        });
      },
      // reject: (type: any) => {
      //   switch (type) {
      //     case ConfirmEventType.REJECT:
      //       this.messageService.add({
      //         severity: 'error',
      //         summary: 'Rejected',
      //         detail: 'You have rejected',
      //       });
      //       this.confirmationService.close();
      //       break;
      //     case ConfirmEventType.CANCEL:
      //       this.messageService.add({
      //         severity: 'warn',
      //         summary: 'Cancelled',
      //         detail: 'You have cancelled',
      //       });
      //       this.confirmationService.close();
      //       break;
      //   }
      // },
    });
  }

  showEditProductDialog() {
    const ref = this.dialogService.open(ClientEditProductDialogComponent, {
      header: 'Edit Product',
      width: '70%',
      data: this.product,
    });
    // TODO Remove the event meter from closing the dialog, leave it only for updating the data.
    this.dialogCloseSubscription = ref.onClose.subscribe(() => {
      this.updateTableEvent.emit();
    });
  }

  ngOnDestroy() {
    this.dialogCloseSubscription.unsubscribe();
  }
}
