import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesViewComponent } from './sales-view.component';
import  { AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SalesViewComponent]
})
export class SalesModule { }
