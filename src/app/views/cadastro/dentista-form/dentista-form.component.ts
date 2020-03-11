import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dentista } from 'app/model/dentista.model';
import { DentistaService } from 'app/service/dentista/dentista.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';

declare var $: any;

@Component({
  selector: 'app-dentista-form',
  templateUrl: './dentista-form.component.html',
  styleUrls: ['./dentista-form.component.scss']
})
export class DentistaFormComponent extends GenericFormComponent<Dentista, DentistaService> {
  @ViewChild('dentistaForm') dentistaForm: NgForm;

  constructor(
    service: DentistaService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Dentista);
  }

  public initModal(dentista?: Dentista): void {
    if (dentista) {
      Object.assign(this.obj, dentista);
      this.edit = true;
    } else {
      this.obj = new Dentista();
      this.edit = false;
    }
    $('#dentistaModal').modal('show');
  }

  closeModal(): void {
    $('#dentistaModal').modal('hide');
  }

  save() {
    this.toast('Dentista Salvo', MessageType.SUCCESS);
    this.closeModal();
  }

}
