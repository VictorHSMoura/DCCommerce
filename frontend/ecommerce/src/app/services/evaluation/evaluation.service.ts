import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) { }


  public getEvaluationBySearch(searchText: string): Promise<Evaluation[]> {
    // para rodar no nosso backend mudar rota para: http://localhost:8080/api/comentario?produtoId'
    return this.http.get('http://localhost:3000/comentarios?productId=' + searchText)
      .toPromise()
      .then((answer: Evaluation[]) => answer);
  }

  public postEvaluation(evaluation: Evaluation): Promise<Evaluation> {
    return this.http.post('http://localhost:8080/api/comentario', evaluation)
      .toPromise()
      .then((answer: Evaluation) => {
        return answer;
      });
  }
}
