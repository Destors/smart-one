import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSelectedProductsPageRoutingModule } from './client-selected-products-page-routing.module';
import { ClientSelectedProductsPageComponent } from './client-selected-products-page.component';
import { ClientFavoriteProductTableModule } from '../ui/table/client-favorite-product-table/client-favorite-product-table.module';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsApiService } from '../../all-products/api/all-products-api.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ClientSelectedProductsPageComponent],
  imports: [
    CommonModule,
    ClientSelectedProductsPageRoutingModule,
    ClientFavoriteProductTableModule,
    ToastModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [AllProductsApiService, MessageService],
})
export class ClientSelectedProductsPageModule {}
