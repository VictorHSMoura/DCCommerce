import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  exports: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class RegisterModule { }
