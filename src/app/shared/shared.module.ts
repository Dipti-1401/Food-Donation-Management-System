import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

const components = [SharedComponent, HeaderComponent, HomeScreenComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedRoutingModule],
  exports: [...components],
})
export class SharedModule {}
