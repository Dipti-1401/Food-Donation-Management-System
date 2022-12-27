import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDonationRoutingModule } from './food-donation-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FoodDonationRoutingModule,
    SharedModule
  ],
  exports: [SharedModule],
})
export class FoodDonationModule { }
