import { Injectable } from '@angular/core';
import { CrudService } from '../generic-crud/generic-crud.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Constant } from 'app/constant/constant';
import { Dentista } from 'app/model/dentista.model';

@Injectable()
export class DentistaService extends CrudService<Dentista> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.DENTISTA, errorHandler, activatedRoute);
  }

}
