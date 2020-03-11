import { Routes } from '@angular/router';
import { DentistaListComponent } from './dentista-list/dentista-list.component';

export const CadastroRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dentista',
                component: DentistaListComponent
            },
        ]
    }
];
