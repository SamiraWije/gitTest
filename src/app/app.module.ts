import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CustomerModule } from './customer/customer.module';

import { OrderModule } from './order/order.module';

import { SalesModule} from './sales/sales.module';

import { RideModule } from './ride/ride.module';

import {HighlightDirective } from './customer/highlight.directive';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    OrderModule,
    SalesModule,
    RideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
