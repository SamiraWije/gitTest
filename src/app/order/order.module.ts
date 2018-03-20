import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderViewComponent } from './order-view.component';
import  { AppRoutingModule} from '../app-routing.module';
import { OrderDetailComponent } from './order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [OrderViewComponent, OrderDetailComponent],
  exports: [OrderViewComponent]
})
export class OrderModule { }
