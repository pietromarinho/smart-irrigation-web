import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { RouterModule } from '@angular/router';
import { PlantRouter } from './plant.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/app.module';
import { MdModule } from 'app/md/md.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { PlantacaoListComponent } from './plantacao-list/plantacao-list.component';
import { PlantacaoFormComponent } from './plantacao-form/plantacao-form.component';
import { EasyAutocompleteModule } from 'app/shared/autocomplete/autocomplete.component';

@NgModule({
  imports: [
    RouterModule.forChild(PlantRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    EasyAutocompleteModule
  ],
  declarations: [
    PlantFormComponent,
    PlantListComponent,
    CategoryListComponent,
    CategoryFormComponent,
    PlantacaoListComponent,
    PlantacaoFormComponent]
})
export class PlantModule { }
