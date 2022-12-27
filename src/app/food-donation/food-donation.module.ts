import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDonationRoutingModule } from './food-donation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FoodDonationComponent } from './food-donation.component';

@NgModule({
  declarations: [FoodDonationComponent],
  imports: [CommonModule, FoodDonationRoutingModule, SharedModule],
})
export class FoodDonationModule {}
