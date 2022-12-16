import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAllProductsPageRoutingModule } from './client-all-products-page-routing.module';
import { ClientAllProductsPageComponent } from './client-all-products-page.component';
import { ClientAllProductsTableModule } from '../ui/table/client-all-products-table.module';
import { AllProductsApiService } from '../api/all-products-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientAddProductDialogModule } from '../ui/add-product-dialog/client-add-product-dialog.module';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [ClientAllProductsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClientAllProductsPageRoutingModule,
    ClientAllProductsTableModule,
    ClientAddProductDialogModule,
    ToastModule,
    CardModule,
  ],
  providers: [AllProductsApiService, MessageService],
})
export class ClientAllProductsPageModule {}
