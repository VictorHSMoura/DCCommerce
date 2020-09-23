import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductComponent } from './register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  exports: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterProductModule { }
