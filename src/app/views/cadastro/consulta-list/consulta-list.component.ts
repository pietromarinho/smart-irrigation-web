import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'app/model/consulta.model';
import { ConsultaService } from 'app/service/consulta/consulta.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { ConsultaFormComponent } from '../consulta-form/consulta-form.component';
@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss']
})
export class ConsultaListComponent extends GenericListComponent<Consulta, ConsultaService> {

  @ViewChild('consultaModal') consultaModal: ConsultaFormComponent;

  constructor(
    service: ConsultaService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(consulta?: Consulta): void {
    this.consultaModal.initModal(consulta);
  }

}
