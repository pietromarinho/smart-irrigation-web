import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'app/model/plant.model';
import { PlantService } from 'app/service/plant/plant.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { PlantFormComponent } from '../plant-form/plant-form.component';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent extends GenericListComponent<Plant, PlantService> {

  @ViewChild('plantModal') plantModal: PlantFormComponent;

  constructor(
    service: PlantService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(plant?: Plant): void {
    this.plantModal.initModal(plant);
  }

}
