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

@NgModule({
  imports: [
    RouterModule.forChild(PlantRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [PlantFormComponent, PlantListComponent, CategoryListComponent, CategoryFormComponent]
})
export class PlantModule { }
