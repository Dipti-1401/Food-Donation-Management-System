import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDonationComponent } from './food-donation/food-donation.component';
import { HomeScreenComponent } from './shared/components/home-screen/home-screen.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:FoodDonationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
