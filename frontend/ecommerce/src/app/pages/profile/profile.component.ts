import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainProduct } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChartService } from 'src/app/services/chart/chart.service';

enum EstadoItem {
  EsperandoPagamento,
  ACaminhoTransportadora,
  SaiuDaTransportadora,
  Finalizado
}

export class Pedido {
  constructor(
    public id: number,
    public status: EstadoItem,
    public name: string,
    public MainProduct: MainProduct
  ) {
  }
  public getStatusString(): string {
    switch (this.status) {
      case EstadoItem.EsperandoPagamento:
        return "Esperando o pagamento"
      case EstadoItem.ACaminhoTransportadora:
        return "A caminho da transportadora"
      case EstadoItem.SaiuDaTransportadora:
        return "Saiu da transportadora"
      case EstadoItem.Finalizado:
        return "Finalizado"
    }
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  EstadoItem: typeof EstadoItem = EstadoItem; // precisa disso pra conseguir acessar o enum no html '-'
  pedidos = []

  constructor(private router: Router, private chartService: ChartService, private authService: AuthService) { }

  ngOnInit() {
    // todo autenticar o usuário e ler do banco de dados todos os ids, nomes, e status dos pedidos desse usuário
    this.chartService.getProductsBySearch(this.authService.getUserEmail()).then(data => {
      this.pedidos = data
    })

  }

  btnClick(produtoId) {
    this.router.navigate(['/evaluation', produtoId]);
  }
}
