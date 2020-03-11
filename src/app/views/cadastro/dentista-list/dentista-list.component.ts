import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Dentista } from 'app/model/dentista.model';
import { DentistaService } from 'app/service/dentista/dentista.service';
import { DentistaFormComponent } from '../dentista-form/dentista-form.component';

@Component({
  selector: 'app-dentista-list',
  templateUrl: './dentista-list.component.html',
  styleUrls: ['./dentista-list.component.scss']
})
export class DentistaListComponent extends GenericListComponent<Dentista, DentistaService> {

  @ViewChild('dentistaModal') dentistaModal: DentistaFormComponent;

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

}
