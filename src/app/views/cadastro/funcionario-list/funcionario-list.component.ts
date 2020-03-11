import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'app/model/funcionario.model';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { MessageType, SwalType } from 'app/service/toast-notification-service/message-type.enum';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import swal from 'sweetalert2';
import { FuncionarioFormComponent } from '../funcionario-form/funcionario-form.component';


@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent extends GenericListComponent<Funcionario, FuncionarioService> {

  @ViewChild('funcionarioModal') funcionarioModal: FuncionarioFormComponent;

  funcionarios: Funcionario[] = [
    { id: '1', name: 'Diego', telefone: '111111111', matricula: '12', endereco: { rua: 'Silva Ramos', numero: '123', bairro: 'Centro', } },
    { id: '2', name: 'Lucas', telefone: '111111111', matricula: '34', endereco: { rua: 'Silva Ramos', numero: '124', bairro: 'Centro', } },
    { id: '3', name: 'Luan', telefone: '111111111', matricula: '56', endereco: { rua: 'Silva Ramos', numero: '125', bairro: 'Centro', } },
    { id: '4', name: 'Lohan', telefone: '111111111', matricula: '78', endereco: { rua: 'Silva Ramos', numero: '126', bairro: 'Centro', } },
    { id: '5', name: 'Bruno', telefone: '111111111', matricula: '90', endereco: { rua: 'Silva Ramos', numero: '127', bairro: 'Centro', } }
  ]

  constructor(
    service: FuncionarioService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(funcionario?: Funcionario): void {
    this.funcionarioModal.initModal(funcionario);
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
