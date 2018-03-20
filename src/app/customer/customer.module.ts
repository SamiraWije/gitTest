import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view.component';
import  { AppRoutingModule} from '../app-routing.module';
import { HighlightDirective } from './highlight.directive';
import { CustomerViewService } from './customer-view.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [CustomerViewComponent, HighlightDirective],
  exports: [CustomerViewComponent],
  providers: [CustomerViewService]
})
export class CustomerModule { }
