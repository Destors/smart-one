import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAllProductsTableActionBtnComponent } from './client-all-products-table-action-btn.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ClientAllProductsTableActionBtnComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  exports: [ClientAllProductsTableActionBtnComponent],
})
export class ClientAllProductsTableActionBtnModule {}
