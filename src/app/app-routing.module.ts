import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PurchaseOrderComponent } from './views/purchase-order/purchase-order.component';
import { BreadCrumbsComponent } from './views/bread-crumbs/bread-crumbs.component';
import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { PersonInfoComponent } from './views/person-info/person-info.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'order',
        component: PurchaseOrderComponent,
        children: [
          {
            path: '',
            component: OrderDetailsComponent,
          },
          {
            path: 'persondetails',
            component: PersonInfoComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: LoginComponent,
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
