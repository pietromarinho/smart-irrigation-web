import { Injectable } from '@angular/core';
import { Arduino } from 'app/model/arduino.model';
import { Observable } from 'rxjs';
import { CrudService } from '../generic-crud/generic-crud.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Constant } from 'app/constant/constant';
import { RestService } from '../rest/rest.service';

@Injectable()
export class ArduinoService extends RestService {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, errorHandler);
  }

  public bombOn(arduino: Arduino): Observable<Arduino> {
    return this.post('http://localhost:7500/irrigation/rest/arduino/', arduino);
  }
  public bombOff(arduino: Arduino): Observable<Arduino> {
    return this.post('http://' + arduino.id + '/led1off')
      .map(this.extractData)
      .catch(this.handleError.bind(this));
  }

}
