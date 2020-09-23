import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { MainProduct, Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CATEGORIES } from '../../models/consts/categories';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {

  public registerProductForm: FormGroup;
  public money: number;
  public categories: string[] = CATEGORIES;
  private userName: string;
  private userEmail: string;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private authService: AuthService,
    private productService: ProductService,
    private router: Router
  ) { }

  public async cadastrar(): Promise<void> {
    try {
      const value = this.registerProductForm.value;
      console.log(this.registerProductForm.value.imagens)
      let product: Product = new Product(
        this.registerProductForm.value.categoria,
        this.registerProductForm.value.titulo,
        this.registerProductForm.value.descricao_oferta,
        this.registerProductForm.value.valor,
        this.userName,
        this.userEmail,
        false,
        this.registerProductForm.value.imagens
      )

      this.productService.postProduct(product, this.registerProductForm.value.imagens, this.authService.getUserEmail())
      .then((products: MainProduct) => {
        this.router.navigate(['/product', products.id]);
      })
      .catch((param: any) => {
        this.toasterService.pop('error', 'Algum erro ocorreu', 'Tente novamente mais tarde');
      });

    } catch (e) {
      this.toasterService.pop('error', 'Erro no cadastro', 'Confira os dados digitados ou tente novamente mais tarde');
      console.log('login error', e);
    }
  }

  private initForm(): void {
    this.registerProductForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao_oferta: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required, Validators.minLength(1)]],
      imagens: [null, [Validators.required]]
    });
    this.money = this.registerProductForm.value.valor;
    this.userName = this.authService.getUserName();
    this.userEmail = this.authService.getUserEmail();
  }

  ngOnInit() {
    this.initForm();
  }

  public teste(image: any): void {
    const files = image.files;
    this.registerProductForm.value.imagens = files[0];
  }

}
