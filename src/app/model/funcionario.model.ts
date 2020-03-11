import { BaseModel } from './base.model';
import { Endereco } from './endereco.model';

export class Funcionario extends BaseModel {
    name: string;
    matricula: string;
    telefone: string;
    endereco: Endereco;

    constructor() {
        super();
        this.endereco = new Endereco()
    }
}
