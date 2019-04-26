import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plant } from 'app/model/plant.model';
import { PlantService } from 'app/service/plant/plant.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent extends GenericFormComponent<Plant, PlantService> {
  @ViewChild('plantForm') plantForm: NgForm;

  constructor(
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
    $('#plantModal').modal('show');
  }

  closeModal(): void {
    $('#plantModal').modal('hide');
  }

}
