import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Product } from 'src/app/models/product.model';
import { CATEGORIES } from '../../models/consts/categories';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  public evaluationForm: FormGroup;
  public money: number;
  public categories: string[] = CATEGORIES;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService
  ) { }

  public async publicar(): Promise<void> {

  }

  // Only for tests
  // public publicar(): void{
  //   console.log(this.avaluationForm);
  // }

  private initForm(): void {
    this.evaluationForm = this.formBuilder.group({
      //Colocar função input das estrelas
      stars: ['', [Validators.required]],
      comentario: ['']
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
