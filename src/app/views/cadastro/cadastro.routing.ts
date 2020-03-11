import { Routes } from '@angular/router';
import { DentistaListComponent } from './dentista-list/dentista-list.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';

export const CadastroRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dentista',
                component: DentistaListComponent
            },
            {
                path: 'funcionario',
                component: FuncionarioListComponent
            },
            {
                path: 'cliente',
                component: ClienteListComponent
            },
            {
                path: 'produto',
                component: ProdutoListComponent
            },
            {
                path: 'consulta',
                component: ConsultaListComponent
            },
        ]
    }
];
