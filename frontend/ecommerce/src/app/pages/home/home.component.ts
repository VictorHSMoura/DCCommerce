import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { MainProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  public products: MainProduct[];

  constructor(
    private productService: ProductService,
    private toasterService: ToasterService
  ) { }

  ngOnInit(): void {

    this.productService.getProducts()
      .then((products: MainProduct[]) => {
        this.products = products
      })
      .catch((param: any) => {
        this.toasterService.pop('error', 'Algum erro ocorreu', 'Tente novamente mais tarde');
      });
  }

}
