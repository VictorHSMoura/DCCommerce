import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaluationComponent } from './avaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AvaluationComponent
  ],
  exports: [
    AvaluationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AvaluationModule { }
