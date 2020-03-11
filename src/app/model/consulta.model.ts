import { BaseModel } from './base.model';
import { Dentista } from './dentista.model';

export class Consulta extends BaseModel {
    paciente: string;
    dataConsulta: string;
    dentista: Dentista;

    constructor() {
        super();
            this.dentista = new Dentista()
    }
}
