import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Product } from 'src/app/models/product.model';
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

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService
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
        'Nome do Anunciante',
        false,
        []
      )
      console.log(product);
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
  }

  ngOnInit() {
    this.initForm();
  }

  public teste(image: any): void {
    const files = image.files;
    this.registerProductForm.value.imagens = files;
    console.log(this.registerProductForm.value.imagens);
  }

}
