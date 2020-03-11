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

  clientes: Cliente[] = [
    { id: '1', name: 'Diego', cpf: '789', telefone: '111111111', email: 'Diego@email.com', sexo: 'masculino', endereco: { rua: 'Silva Ramos', numero: '123', bairro: 'Centro', } },
    { id: '2', name: 'Lucas', cpf: '456', telefone: '111111111', email: 'Lucas@email.com', sexo: 'masculino', endereco: { rua: 'Silva Ramos', numero: '124', bairro: 'Centro', } },
    { id: '3', name: 'Luan', cpf: '123', telefone: '111111111', email: 'Luan@email.com', sexo: 'masculino', endereco: { rua: 'Silva Ramos', numero: '125', bairro: 'Centro', } },
    { id: '4', name: 'Lohan', cpf: '987', telefone: '111111111', email: 'Lohan@email.com', sexo: 'masculino', endereco: { rua: 'Silva Ramos', numero: '126', bairro: 'Centro', } },
    { id: '5', name: 'Bruno', cpf: '654', telefone: '111111111', email: 'Bruno@email.com', sexo: 'masculino', endereco: { rua: 'Silva Ramos', numero: '127', bairro: 'Centro', } }
  ]

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
