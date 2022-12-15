import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAllProductsTableComponent } from './client-all-products-table.component';
import { TableModule } from 'primeng/table';
import { ClientAllProductsTableActionBtnModule } from './components/action-button/client-all-products-table-action-btn.module';
import { ClientAllProductsTableFavoritesBtnModule } from './components/favorites-button/client-all-products-table-favorites-btn.module';

@NgModule({
  declarations: [ClientAllProductsTableComponent],
  imports: [
    CommonModule,
    TableModule,
    ClientAllProductsTableActionBtnModule,
    ClientAllProductsTableFavoritesBtnModule,
  ],
  exports: [ClientAllProductsTableComponent],
})
export class ClientAllProductsTableModule {}
