import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/app.module';
import { MdModule } from 'app/md/md.module';
import { EasyAutocompleteModule } from 'app/shared/autocomplete/autocomplete.component';
import { DentistaListComponent } from './dentista-list/dentista-list.component';
import { DentistaFormComponent } from './dentista-form/dentista-form.component';
import { CadastroRouter } from './cadastro.routing';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './consulta-form/consulta-form.component';

@NgModule({
  imports: [
    RouterModule.forChild(CadastroRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    EasyAutocompleteModule
  ],
  declarations: [
    DentistaListComponent,
    DentistaFormComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent,
    ClienteListComponent,
    ClienteFormComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    ConsultaListComponent,
    ConsultaFormComponent
  ]
})
export class CadastroModule { }
