import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingHistoryComponent } from './shopping-history.component';



@NgModule({
  declarations: [
    ShoppingHistoryComponent
  ],
  exports: [
    ShoppingHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingHistoryModule { }
