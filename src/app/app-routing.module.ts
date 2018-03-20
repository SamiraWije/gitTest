import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerViewComponent} from './customer/customer-view.component';
import { OrderViewComponent} from './order/order-view.component';
import { SalesViewComponent} from './sales/sales-view.component';
import { OrderDetailComponent} from './order/order-detail.component';
import {RideDetailComponent} from './ride/ride-detail.component';


const routes: Routes = [
  {path: 'customer', component: CustomerViewComponent},
  {path: 'order', component: OrderViewComponent},
  {path: 'order/:oid', component: OrderViewComponent},
  {path: 'sales', component:SalesViewComponent},
  {path: 'ride', component:RideDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
