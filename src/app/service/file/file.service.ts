import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Constant } from 'app/constant/constant';
import { Observable } from 'rxjs/Observable';
import { MediaFile } from 'app/model/media-file.model';
import { ErrorService } from 'app/service/toast-notification-service/error-service/error.service';
import { RestService } from '../rest/rest.service';



@Injectable()
export class FileService extends RestService {

    apiurl = Constant.BASE_URL + Constant.FILE;

    constructor(public http: Http, public errorHandler: ErrorService) {
        super(http, errorHandler);
    }

    public upload(mediaType: String, fileToUpload: any): Observable<MediaFile> {
        const input = new FormData();
        input.append('file', fileToUpload);

        const options = new RequestOptions();
        options.headers = new Headers();

        if (localStorage.getItem('auth')) {
            options.headers.set('Authorization', `TEL=${localStorage.getItem('auth')}`);
        }

        return this.http.post(this.apiurl + mediaType, input, options)
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    }
}
