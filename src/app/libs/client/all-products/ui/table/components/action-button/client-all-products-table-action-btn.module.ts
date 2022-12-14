import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAllProductsTableActionBtnComponent } from './client-all-products-table-action-btn.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [ClientAllProductsTableActionBtnComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    ConfirmDialogModule,
  ],
  exports: [ClientAllProductsTableActionBtnComponent],
  providers: [ConfirmationService],
})
export class ClientAllProductsTableActionBtnModule {}
