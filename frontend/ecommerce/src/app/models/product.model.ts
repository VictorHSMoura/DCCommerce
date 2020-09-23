import { assertNotNull } from '@angular/compiler/src/output/output_ast';

export class Product {
    constructor(
        public categoria: string,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public anunciante: string,
        public anunciante_email: string,
        public destaque: boolean,
        public urlFoto: string
    ) {}
}

export class MainProduct extends Product {
    constructor(
        public id: number,
        categoria: string,
        titulo: string,
        descricao_oferta: string,
        valor: number,
        anunciante: string,
        anunciante_email: string,
        destaque: boolean,
        urlFoto: any,
    ){
        super(categoria, titulo, descricao_oferta, valor, anunciante, anunciante_email, destaque, urlFoto);
    }
}