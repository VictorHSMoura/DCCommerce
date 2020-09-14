import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductComponent } from './register-product.component';



@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  exports: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterProductModule { }
