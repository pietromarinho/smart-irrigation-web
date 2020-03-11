import { BaseModel } from './base.model';

export class Produto extends BaseModel {
    name: string;
    qtd: number;
    dataVd: string;
    descricao: string;
    preco: number;
    codBar: string;

    constructor() {
        super();
    }
}
