import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { MainProduct } from 'src/app/models/product.model';
import { ChartService } from 'src/app/services/chart/chart.service';
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
    private toasterService: ToasterService,
    private chartService: ChartService,
    private router: Router
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

  adicionarCarrinho(produto) {
    this.chartService.addProductToChart(produto);
    this.router.navigate(['cart'])
  }

}
