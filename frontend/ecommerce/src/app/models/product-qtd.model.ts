import { MainProduct } from './product.model';

export class ProductQtd {
    constructor(
        public produto: MainProduct,
        public qtd: number,
    ) {}
}