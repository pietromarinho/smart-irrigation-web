import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'app/model/cliente.model';
import { ClienteService } from 'app/service/cliente/cliente.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent extends GenericListComponent<Cliente, ClienteService> {

  @ViewChild('clienteModal') clienteModal: ClienteFormComponent;

  constructor(
    service: ClienteService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(cliente?: Cliente): void {
    this.clienteModal.initModal(cliente);
  }

}
