import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFavoriteProductTableComponent } from './client-favorite-product-table.component';
import { TableModule } from 'primeng/table';
import { ClientAllProductsTableFavoritesBtnModule } from 'src/app/libs/client/all-products/ui/table/components/favorites-button/client-all-products-table-favorites-btn.module';

@NgModule({
  declarations: [ClientFavoriteProductTableComponent],
  imports: [
    CommonModule,
    TableModule,
    ClientAllProductsTableFavoritesBtnModule,
  ],
  exports: [ClientFavoriteProductTableComponent],
})
export class ClientFavoriteProductTableModule {}
