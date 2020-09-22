import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { MainProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { CATEGORIES } from '../../models/consts/categories';

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

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public async publicar(): Promise<void> {
    try {
      const value = this.evaluationForm.value;
      console.log(this.evaluationForm.value.stars)
      this.router.navigate(['/profile']);

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
  }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params: Params) => {
      this.productService.getProductById(params.id)
        .then((product: MainProduct) => {
          this.product = product;
          if(product !== undefined){
            this.mainImage = product.imagens[0].url;
          }
        });
    });
  }

}
