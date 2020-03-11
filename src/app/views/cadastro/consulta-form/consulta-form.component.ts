import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'app/model/consulta.model';
import { ConsultaService } from 'app/service/consulta/consulta.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.scss']
})
export class ConsultaFormComponent extends GenericFormComponent<Consulta, ConsultaService> {
  @ViewChild('consultaForm') consultaForm: NgForm;

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
