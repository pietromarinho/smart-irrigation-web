import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plant } from 'app/model/plant.model';
import { PlantService } from 'app/service/plant/plant.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from 'app/model/category.model';
import { CategoryService } from 'app/service/category/category.service';

declare var $: any;

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent extends GenericFormComponent<Plant, PlantService> {
  @ViewChild('plantForm') plantForm: NgForm;

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    service: PlantService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Plant);
  }

  public initModal(plant?: Plant): void {
    if (plant) {
      Object.assign(this.obj, plant);
      this.edit = true;
    } else {
      this.obj = new Plant();
      this.edit = false;
    }
    this.getCategories();
    $('#plantModal').modal('show');
  }

  closeModal(): void {
    $('#plantModal').modal('hide');
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe(
      success => {
        this.categories = success;
      }
    );
  }

  getHolderCategory(): string {
    if (this.categories.length < 1) {
      return 'Não há categorias cadastradas';
    } else {
      return 'Categoria';
    }
  }

}
