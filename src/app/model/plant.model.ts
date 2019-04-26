import { BaseModel } from './base.model';
import { Category } from './category.model';

export class Plant extends BaseModel {
    name: string;
    category: Category;
    // plant_type: 

    constructor() {
        super();
        this.category = new Category;
    }
}
