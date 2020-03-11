import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'app/model/funcionario.model';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { FuncionarioFormComponent } from '../funcionario-form/funcionario-form.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent extends GenericListComponent<Funcionario, FuncionarioService> {

  @ViewChild('funcionarioModal') funcionarioModal: FuncionarioFormComponent;

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
}
