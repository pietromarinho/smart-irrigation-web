import { Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PlantacaoListComponent } from './plantacao-list/plantacao-list.component';

export const PlantRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: 'registros',
                component: PlantListComponent
            },
            {
                path: 'category',
                component: CategoryListComponent
            },
            {
                path: 'plantacao',
                component: PlantacaoListComponent
            },
        ]
    }
];
