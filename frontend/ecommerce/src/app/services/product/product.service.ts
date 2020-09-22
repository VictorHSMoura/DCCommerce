import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Promise<MainProduct []> {
    return this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((answer: MainProduct[]) => {
        console.log('chegou aqui');
        console.log(answer);
        return answer;
      });
  }

  public getProductById(id: number): Promise<MainProduct> {
    return this.http.get('http://localhost:3000/ofertas?id=' + id)
      .toPromise()
      .then((answer: MainProduct) => {
        return answer[0];
      });
  }
}
