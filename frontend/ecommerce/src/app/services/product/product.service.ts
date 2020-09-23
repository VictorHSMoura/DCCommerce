import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProduct, Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Promise<MainProduct []> {
    return this.http.get('http://localhost:8080/api/produto')
      .toPromise()
      .then((answer: MainProduct[]) => answer);
  }

  public getProductById(id: number): Promise<MainProduct> {
    return this.http.get('http://localhost:8080/api/produto/' + id)
      .toPromise()
      .then((answer: MainProduct) => answer);
  }

  public getProductsBySearch(searchText: string): Promise<MainProduct[]> {
    return this.http.get('http://localhost:8080/api/produto?titulo_like=' + searchText)
      .toPromise()
      .then((answer: MainProduct[]) => answer);
  }

  public postProduct(product: Product, image: File, emailLogado:string): Promise<MainProduct> {
    const itemData = new FormData();
    console.log(image)
    itemData.append('titulo', product.titulo);
    itemData.append('categoria', product.categoria);
    itemData.append('descricao_oferta', product.descricao_oferta);
    itemData.append('valor', product.valor.toString());
    itemData.append('anunciante', product.anunciante);
    itemData.append('anunciante_email', emailLogado);
    itemData.append('image', image, product.titulo);

    return this.http.post('http://localhost:8080/api/produto', itemData)
      .toPromise()
      .then((answer: MainProduct) => {
        return answer;
      });
  }
}
