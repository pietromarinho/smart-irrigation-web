import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'app/model/consulta.model';
import { ConsultaService } from 'app/service/consulta/consulta.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Dentista } from 'app/model/dentista.model';

declare var $: any;

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.scss']
})
export class ConsultaFormComponent extends GenericFormComponent<Consulta, ConsultaService> {
  @ViewChild('consultaForm') consultaForm: NgForm;

  dentistas: Dentista[] = [
    { id: '1', name: 'Diego', cro: '789', telefone: '111111111', email: 'Diego@email.com', sexo: 'masculino', matricula: '12', endereco: { rua: 'Silva Ramos', numero: '123', bairro: 'Centro', } },
    { id: '2', name: 'Lucas', cro: '456', telefone: '111111111', email: 'Lucas@email.com', sexo: 'masculino', matricula: '34', endereco: { rua: 'Silva Ramos', numero: '124', bairro: 'Centro', } },
    { id: '3', name: 'Luan', cro: '123', telefone: '111111111', email: 'Luan@email.com', sexo: 'masculino', matricula: '56', endereco: { rua: 'Silva Ramos', numero: '125', bairro: 'Centro', } },
    { id: '4', name: 'Lohan', cro: '987', telefone: '111111111', email: 'Lohan@email.com', sexo: 'masculino', matricula: '78', endereco: { rua: 'Silva Ramos', numero: '126', bairro: 'Centro', } },
    { id: '5', name: 'Bruno', cro: '654', telefone: '111111111', email: 'Bruno@email.com', sexo: 'masculino', matricula: '90', endereco: { rua: 'Silva Ramos', numero: '127', bairro: 'Centro', } }
  ]

  minDate = new Date();
  data = new FormControl('');
  horarios: string[] = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  constructor(
    service: ConsultaService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Consulta);
  }

  public initModal(consulta?: Consulta): void {
    if (consulta) {
      Object.assign(this.obj, consulta);
      this.edit = true;
    } else {
      this.obj = new Consulta();
      this.edit = false;
    }
    $('#consultaModal').modal('show');
  }

  closeModal(): void {
    $('#consultaModal').modal('hide');
  }

  save() {
    this.toast('Consulta Salvo', MessageType.SUCCESS);
    this.closeModal();
  }



}
