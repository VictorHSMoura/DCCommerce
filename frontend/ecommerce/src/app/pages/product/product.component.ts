import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { MainProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { Evaluation } from 'src/app/models/evaluation.model';
import { EvaluationService } from 'src/app/services/evaluation/evaluation.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService, EvaluationService]
})
export class ProductComponent implements OnInit {

  public product: MainProduct;
  public mainImage: string;
  public comments: Evaluation[];
  public avaliacao: number = 0;

  constructor(private productService: ProductService, private commentService: EvaluationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productService.getProductById(params.id)
        .then((product: MainProduct) => {
          this.product = product;
          if(product !== undefined){
            this.mainImage = product.imagens[0].url;
          }
        });

      this.commentService.getEvaluationBySearch(params.id)
      .then((comments: Evaluation[]) => {
        this.comments = comments;
        let count: number = 0;
        comments.forEach(a => count += 1);
        comments.forEach(a => this.avaliacao += Number(a.nota));
        this.avaliacao = Math.round((this.avaliacao / count)*10)/10;
        document.getElementById("nota").innerHTML = this.avaliacao.toString();
      });


    });
  }

  public changeImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

}
