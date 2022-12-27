import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

@NgModule({
  declarations: [SharedComponent, HeaderComponent, HomeScreenComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SharedComponent],
})
export class SharedModule {}
