import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAllProductsTableFavoritesBtnComponent } from './client-all-products-table-favorites-btn.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientAllProductsTableFavoritesBtnComponent],
  imports: [CommonModule, CheckboxModule, FormsModule, ReactiveFormsModule],
  exports: [ClientAllProductsTableFavoritesBtnComponent],
})
export class ClientAllProductsTableFavoritesBtnModule {}
