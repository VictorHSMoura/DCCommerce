import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { MainProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  public product: MainProduct;
  public mainImage: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

  public changeImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

}
