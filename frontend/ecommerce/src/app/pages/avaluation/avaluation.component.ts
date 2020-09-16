import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Product } from 'src/app/models/product.model';
import { CATEGORIES } from '../../models/consts/categories';

@Component({
  selector: 'app-avaluation',
  templateUrl: './avaluation.component.html',
  styleUrls: ['./avaluation.component.scss']
})
export class AvaluationComponent implements OnInit {

  public avaluationForm: FormGroup;
  public money: number;
  public categories: string[] = CATEGORIES;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService
  ) { }

  public async publicar(): Promise<void> {

  }

  private initForm(): void {
    this.avaluationForm = this.formBuilder.group({
      //Colocar função input das estrelas
      comentario: ['']
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
