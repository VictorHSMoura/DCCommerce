import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class DashboardModule { }
