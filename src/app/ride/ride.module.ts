import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RideDetailComponent } from './ride-detail.component';
import {AppRoutingModule} from '../app-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [RideDetailComponent]
})
export class RideModule { }
