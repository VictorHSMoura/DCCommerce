import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { MainProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { CATEGORIES } from '../../models/consts/categories';
import { Evaluation } from 'src/app/models/evaluation.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EvaluationService } from 'src/app/services/evaluation/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
  providers: [ProductService]
})
export class EvaluationComponent implements OnInit {

  public evaluationForm: FormGroup;
  public product: MainProduct;
  public mainImage: string;
  private userName: string;


  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private evaluationService: EvaluationService,
  ) { }

  public async publicar(): Promise<void> {
    try {
      const value = this.evaluationForm.value;

      const evaluation = new Evaluation(this.product.id, this.evaluationForm.value.comentario, this.evaluationForm.value.stars, this.userName);
      
      this.evaluationService.postEvaluation(evaluation)
        .then((evaluation: Evaluation) => {
          this.router.navigate(['/profile']);
        })
      .catch((param: any) => {
        this.toasterService.pop('error', 'Algum erro ocorreu', 'Tente novamente mais tarde');
      });
      

    } catch (e) {
      this.toasterService.pop('error', 'Erro na publicação', 'Confira os dados digitados ou tente novamente mais tarde');
      console.log('login error', e);
    }
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
    this.userName = this.authService.getUserName();
  }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params: Params) => {
      this.productService.getProductById(params.id)
        .then((product: MainProduct) => {
          this.product = product;
          if(product !== undefined){
            this.mainImage = product.urlFoto;
          }
        });
    });
  }

}
