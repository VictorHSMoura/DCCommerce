import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChartService } from 'src/app/services/chart/chart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public chartService: ChartService, private authService: AuthService, private router: Router) { }

  public products = [];
  public total = 0;

  ngOnInit(): void {
   this.updateServiceValues();
  }

  addToCart(produto) {
    this.chartService.addProductToChart(produto);
    this.updateServiceValues();

  }

  removeFromCart(produto) {
    this.chartService.removeProductFromChart(produto);
    this.updateServiceValues();
  }

  updateServiceValues() {
    this.products = this.chartService.listProducts.produtoQtdLista;
    this.total = this.chartService.totalValue();
  }

  finishOrder() {
    this.chartService.postOrder(this.authService.getUserEmail()).then();
    this.router.navigate(['profile'])
  }

}
