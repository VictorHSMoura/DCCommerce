export class Product {
    constructor(
        public categoria: string,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public anunciante: string,
        public destaque: boolean,
        public imagens: any
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
        destaque: boolean,
        imagens: any
    ){
        super(categoria, titulo, descricao_oferta, valor, anunciante, destaque, imagens);
    }
}