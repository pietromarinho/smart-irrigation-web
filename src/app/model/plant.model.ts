import { BaseModel } from './base.model';
import { Category } from './category.model';
import { PlantType } from './plant-type.enum';

export class Plant extends BaseModel {
    name: string;
    category: Category;
    plant_type: PlantType;

    constructor() {
        super();
        this.category = new Category;
    }
}
