import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAllProductsPageRoutingModule } from './client-all-products-page-routing.module';
import { ClientAllProductsPageComponent } from './client-all-products-page.component';
import { ClientAllProductsTableModule } from '../ui/table/client-all-products-table.module';
import { ClientAddProductDialogModule } from '../ui/add-product-dialog/client-add-product-dialog.module';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProductsApiModule } from '../../api/products-api.module';
@NgModule({
  declarations: [ClientAllProductsPageComponent],
  imports: [
    CommonModule,
    ProductsApiModule,
    ClientAllProductsPageRoutingModule,
    ClientAllProductsTableModule,
    ClientAddProductDialogModule,
    ToastModule,
    CardModule,
  ],
  providers: [MessageService],
})
export class ClientAllProductsPageModule {}
