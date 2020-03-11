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
    DentistaFormComponent
  ]
})
export class CadastroModule { }
