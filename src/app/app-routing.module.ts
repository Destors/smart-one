import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all-products-page' },

  {
    path: 'all-products-page',
    loadChildren: () =>
      import(
        './libs/client/all-products/page/client-all-products-page.module'
      ).then((m) => m.ClientAllProductsPageModule),
  },
  {
    path: 'selected-products-page',
    loadChildren: () =>
      import(
        './libs/client/selected-products/page/client-selected-products-page.module'
      ).then((m) => m.ClientSelectedProductsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
