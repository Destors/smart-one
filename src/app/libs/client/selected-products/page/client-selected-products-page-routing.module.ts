import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSelectedProductsPageComponent } from './client-selected-products-page.component';

const routes: Routes = [{ path: '', component: ClientSelectedProductsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSelectedProductsPageRoutingModule { }
