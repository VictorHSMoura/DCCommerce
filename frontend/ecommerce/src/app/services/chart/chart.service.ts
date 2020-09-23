import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListToOrder } from 'src/app/models/product-list-to-order.model';
import { ProductQtd } from 'src/app/models/product-qtd.model';
import { MainProduct } from 'src/app/models/product.model';
import { Pedido } from 'src/app/pages/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  public listProducts = new ProductListToOrder([], null);

  public addProductToChart(product: MainProduct): void {
    let prevIndex = -1

    
    this.listProducts.produtoQtdLista.forEach((prodQtd, index) => {
      if (prodQtd.produto.id === product.id) {
        prodQtd.qtd++;
        prevIndex = index;
      }
    });

    if (prevIndex === -1){ 
      this.listProducts.produtoQtdLista.push(new ProductQtd(product, 1));
    }
  }

  public removeProductFromChart(product: MainProduct): void {
    let prevIndex = -1
    let qtd = -1;

    this.listProducts.produtoQtdLista.forEach((prodQtd, index) => {
      if (prodQtd.produto.id === product.id) {
        prodQtd.qtd--;
        prevIndex = index;   
        qtd = prodQtd.qtd;  
      }
    });

    if (prevIndex !== -1 && qtd === 0){
      this.listProducts.produtoQtdLista.splice(prevIndex, 1);
    }
  }

  public totalValue(): number {
    let value = 0;

    this.listProducts.produtoQtdLista.forEach(prodQtd => {
        value += prodQtd.qtd * prodQtd.produto.valor; 
    });

    return value;
  }

  public postOrder(email): Promise<void> {
    this.listProducts.compradorEmail = email;
    return this.http.post('http://localhost:8080/api/pedido', this.listProducts)
      .toPromise()
      .then();
  }

  public getProductsBySearch(searchText: string): Promise<Pedido[]> {
    return this.http.get('http://localhost:8080/api/pedido?comprador=' + searchText)
      .toPromise()
      .then((answer: Pedido[]) => answer);
  }
}
