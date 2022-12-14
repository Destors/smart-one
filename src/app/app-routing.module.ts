import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'client-dashboard-page' },
  {
    path: 'client-dashboard-page',
    loadChildren: () =>
      import(
        './libs/client-admin-panel/dashboard/page/client-dashboard-page/client-dashboard-page.module'
      ).then((m) => m.ClientDashboardPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
