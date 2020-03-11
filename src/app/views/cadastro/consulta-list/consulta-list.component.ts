import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'app/model/consulta.model';
import { ConsultaService } from 'app/service/consulta/consulta.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { ConsultaFormComponent } from '../consulta-form/consulta-form.component';
import { Dentista } from 'app/model/dentista.model';
@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss']
})
export class ConsultaListComponent extends GenericListComponent<Consulta, ConsultaService> {

  @ViewChild('consultaModal') consultaModal: ConsultaFormComponent;

  dentistas: Dentista[] = [
    { id: '1', name: 'Diego', cro: '789', telefone: '111111111', email: 'Diego@email.com', sexo: 'masculino', matricula: '12', endereco: { rua: 'Silva Ramos', numero: '123', bairro: 'Centro', } },
    { id: '2', name: 'Lucas', cro: '456', telefone: '111111111', email: 'Lucas@email.com', sexo: 'masculino', matricula: '34', endereco: { rua: 'Silva Ramos', numero: '124', bairro: 'Centro', } },
    { id: '3', name: 'Luan', cro: '123', telefone: '111111111', email: 'Luan@email.com', sexo: 'masculino', matricula: '56', endereco: { rua: 'Silva Ramos', numero: '125', bairro: 'Centro', } },
    { id: '4', name: 'Lohan', cro: '987', telefone: '111111111', email: 'Lohan@email.com', sexo: 'masculino', matricula: '78', endereco: { rua: 'Silva Ramos', numero: '126', bairro: 'Centro', } },
    { id: '5', name: 'Bruno', cro: '654', telefone: '111111111', email: 'Bruno@email.com', sexo: 'masculino', matricula: '90', endereco: { rua: 'Silva Ramos', numero: '127', bairro: 'Centro', } }
  ]

  horarios: string[] = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  consultas: Consulta[] = [
    { id: '1', paciente: 'Diego', dataConsulta: '11-11-2020', dentista: this.dentistas[0], horario: this.horarios[0] },
    { id: '2', paciente: 'Lucas', dataConsulta: '11-11-2020', dentista: this.dentistas[1], horario: this.horarios[3] },
    { id: '3', paciente: 'Luan', dataConsulta: '11-11-2020', dentista: this.dentistas[2], horario: this.horarios[5] },
    { id: '4', paciente: 'Lohan', dataConsulta: '11-11-2020', dentista: this.dentistas[3], horario: this.horarios[9] },
    { id: '5', paciente: 'Bruno', dataConsulta: '11-11-2020', dentista: this.dentistas[4], horario: this.horarios[7] }
  ]

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
