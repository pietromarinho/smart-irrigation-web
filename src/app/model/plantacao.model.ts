import { BaseModel } from './base.model';
import { Plant } from './plant.model';

export class Plantacao extends BaseModel {
    name: string;
    plants: Plant[];

    constructor() {
        super();
        this.plants = [];
    }
}
