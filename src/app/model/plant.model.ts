import { BaseModel } from './base.model';
import { Category } from './category.model';

export class Plant extends BaseModel {
    name: string;
    category: Category;

    constructor() {
        super();
        this.category = new Category;
    }
}
