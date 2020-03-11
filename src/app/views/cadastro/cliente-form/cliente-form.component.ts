import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Cliente } from 'app/model/cliente.model';
import { ClienteService } from 'app/service/cliente/cliente.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent extends GenericFormComponent<Cliente, ClienteService> {
  @ViewChild('clienteForm') clienteForm: NgForm;

  constructor(
    service: ClienteService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Cliente);
  }

  public initModal(cliente?: Cliente): void {
    if (cliente) {
      Object.assign(this.obj, cliente);
      this.edit = true;
    } else {
      this.obj = new Cliente();
      this.edit = false;
    }
    $('#clienteModal').modal('show');
  }

  closeModal(): void {
    $('#clienteModal').modal('hide');
  }

  save() {
    this.toast('Cliente Salvo', MessageType.SUCCESS);
    this.closeModal();
  }
}
