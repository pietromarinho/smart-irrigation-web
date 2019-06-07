import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Plantacao } from 'app/model/plantacao.model';
import { PlantacaoService } from 'app/service/plantacao/plantacao.service';
import { PlantacaoFormComponent } from '../plantacao-form/plantacao-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-plantacao-list',
  templateUrl: './plantacao-list.component.html',
  styleUrls: ['./plantacao-list.component.scss']
})
export class PlantacaoListComponent extends GenericListComponent<Plantacao, PlantacaoService> {

  @ViewChild('plantacaoModal') plantacaoModal: PlantacaoFormComponent;

  constructor(
    service: PlantacaoService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(plantacao?: Plantacao): void {
    this.plantacaoModal.initModal(plantacao);
  }

}
