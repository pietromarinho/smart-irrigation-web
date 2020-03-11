import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dentista } from 'app/model/dentista.model';
import { DentistaService } from 'app/service/dentista/dentista.service';
import { MessageType, SwalType } from 'app/service/toast-notification-service/message-type.enum';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import swal from 'sweetalert2';
import { DentistaFormComponent } from '../dentista-form/dentista-form.component';

@Component({
  selector: 'app-dentista-list',
  templateUrl: './dentista-list.component.html',
  styleUrls: ['./dentista-list.component.scss']
})
export class DentistaListComponent extends GenericListComponent<Dentista, DentistaService> {

  @ViewChild('dentistaModal') dentistaModal: DentistaFormComponent;

  dentistas: Dentista[] = [
    { id: '1', name: 'Diego', cro: '789', telefone: '111111111', email: 'Diego@email.com', sexo: 'masculino', matricula: '12', endereco: { rua: 'Silva Ramos', numero: '123', bairro: 'Centro', } },
    { id: '2', name: 'Lucas', cro: '456', telefone: '111111111', email: 'Lucas@email.com', sexo: 'masculino', matricula: '34', endereco: { rua: 'Silva Ramos', numero: '124', bairro: 'Centro', } },
    { id: '3', name: 'Luan', cro: '123', telefone: '111111111', email: 'Luan@email.com', sexo: 'masculino', matricula: '56', endereco: { rua: 'Silva Ramos', numero: '125', bairro: 'Centro', } },
    { id: '4', name: 'Lohan', cro: '987', telefone: '111111111', email: 'Lohan@email.com', sexo: 'masculino', matricula: '78', endereco: { rua: 'Silva Ramos', numero: '126', bairro: 'Centro', } },
    { id: '5', name: 'Bruno', cro: '654', telefone: '111111111', email: 'Bruno@email.com', sexo: 'masculino', matricula: '90', endereco: { rua: 'Silva Ramos', numero: '127', bairro: 'Centro', } }
  ]

  constructor(
    service: DentistaService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(dentista?: Dentista): void {
    this.dentistaModal.initModal(dentista);
  }

  deleteItem() {
    swal(this.swalContent(SwalType.DELETE)
    ).then(function () {
      this.delete();
    }.bind(this)).catch(swal.noop);
  }

  delete() {
    this.toast(this.recordDeletedMsg, MessageType.SUCCESS);
  }

}
