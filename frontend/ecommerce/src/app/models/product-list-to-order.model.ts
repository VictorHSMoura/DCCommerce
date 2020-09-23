import { ProductQtd } from './product-qtd.model';

export class ProductListToOrder {
    constructor(
        public produtoQtdLista: ProductQtd[],
        public compradorEmail: string,
    ) {}
}