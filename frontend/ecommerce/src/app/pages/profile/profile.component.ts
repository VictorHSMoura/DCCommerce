import { Component, OnInit } from '@angular/core';

enum EstadoItem {
  EsperandoPagamento,
  ACaminhoTransportadora,
  SaiuDaTransportadora,
  Finalizado
}

class Pedido {
  constructor(
    public id: number,
    public status: EstadoItem,
    public name: string
  ) {
  }
  public getStatusString(): string {
    switch (this.status) {
      case EstadoItem.EsperandoPagamento:
        return "Esperando o pagamento"
      case EstadoItem.ACaminhoTransportadora:
        return "Esperando o pagamento"
      case EstadoItem.SaiuDaTransportadora:
        return "Saiu da transportadora"
      case EstadoItem.Finalizado:
        return "Concluído"
    }
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pedidos = []

  ngOnInit() {
    // todo autenticar o usuário e ler do banco de dados todos os ids, nomes, e status dos pedidos desse usuário
    this.pedidos.push(new Pedido(52363235, EstadoItem.ACaminhoTransportadora, "Intel 11th gen"))
    this.pedidos.push(new Pedido(2493845700, EstadoItem.EsperandoPagamento, "Produto2"))
    this.pedidos.push(new Pedido(149381357, EstadoItem.SaiuDaTransportadora, "Produto3"))
    this.pedidos.push(new Pedido(2444933257, EstadoItem.Finalizado, "Produto4"))
  }
}