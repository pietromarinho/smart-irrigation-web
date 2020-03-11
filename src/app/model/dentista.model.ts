import { BaseModel } from './base.model';
import { Endereco } from './endereco.model';

export class Dentista extends BaseModel {
    name: string;
    cro: string;
    telefone: string;
    email: string;
    endereco: Endereco;
    sexo: string;
    matricula: string;

    constructor() {
        super();
        this.endereco = new Endereco()
    }
}
