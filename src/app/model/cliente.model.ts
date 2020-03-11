import { BaseModel } from './base.model';
import { Endereco } from './endereco.model';

export class Cliente extends BaseModel {
    name: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: Endereco;
    sexo: string;

    constructor() {
        super();
        this.endereco = new Endereco()
    }
}
