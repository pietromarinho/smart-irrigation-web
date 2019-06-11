import { BaseModel } from './base.model';

export class Arduino extends BaseModel {
    ip: string;
    ativar: boolean;

    constructor() {
        super();
    }
}
