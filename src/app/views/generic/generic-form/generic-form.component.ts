import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BaseModel } from 'app/model/base.model';
import { CrudService } from 'app/service/generic-crud/generic-crud.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';

import { BaseCommons } from 'app/views/generic/generic-form/base-commons';
import { FileService } from '../../../service/file/file.service';
import { NgForm } from '@angular/forms';

declare var $: any;

export class GenericFormComponent<TModel extends BaseModel, TService extends CrudService<TModel>>
    extends BaseCommons implements OnInit {
    recordUpdateMsg: any = 'Item alterado !';
    recordSaveMsg: any = 'Item salvo !';

    obj: TModel;
    edit: boolean;
    modal: boolean;
    backtoRoot: boolean;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public service: TService,
        public location: Location,
        public modelType: new () => TModel,
        public cd?: ChangeDetectorRef,
        public fileService?: FileService,
    ) {
        super(fileService);
    }

    ngOnInit() {
        this.obj = this.getNew();
        this.modal = false;
        this.reload();
    }

    removeDoubleSpace(str: string): string {
        str = str.replace(/\s\s+/g, ' ');
        return str;
    }

    reload() {

        if (this.activatedRoute.snapshot.paramMap.get('id') !== null) {
            const id = this.activatedRoute.snapshot.paramMap.get('id');

            this.service.getOne(id).subscribe(
                loadedObj => {
                    this.edit = true;
                    this.obj = loadedObj;
                    this.afterLoadObj(this.obj);
                    setTimeout(() => { this.cd.detectChanges(); }, 500);
                });
        }
    }

    afterLoadObj(data: TModel) {

    }

    getNew(): TModel {
        return new this.modelType();
    }

    toast(msg: string, type?: MessageType) {
        ToastService.show(msg, type);
    }

    beforeSave() {

    }

    updateOrCreate(idModal?: string) {
        // tslint:disable-next-line:no-shadowed-variable
        const onError = function (error) {
            this.toast(error.headers.get("error"), MessageType.ERROR);
        }.bind(this);

        try {
            this.beforeSave();

            if (!this.edit) {
                this.service.save(this.obj).subscribe(
                    success => {
                        this.obj = success;

                        this.toast(this.recordSaveMsg, MessageType.SUCCESS);
                        if (idModal) {
                            this.afterSaveModal(idModal);
                        } else {
                            this.afterSave();
                        }
                    });
            } else {
                this.service.update(this.obj).subscribe(
                    success => {
                        this.obj = success;

                        this.toast(this.recordUpdateMsg, MessageType.SUCCESS);

                        if (idModal) {
                            this.afterSaveModal(idModal);
                        } else {
                            this.afterSave();
                        }
                    });
            }
        } catch (error) {
            onError(error);
        }
    }

    afterSave() {
        setTimeout(() => this.returnScreen(), 300);
    }

    afterSaveModal(idModal: string) {
        $(idModal).modal('hide');
        this.modal = true;
    }

    clearForm(idForm: NgForm) {
        idForm.resetForm();
    }

    getLocation() {
        const tree = this.router.parseUrl(this.router.url);

        return tree.root.children['primary'].segments.map(it => it.path).join('/');
    }

    getParentPath(path?) {
        if (path) {
            return path.slice(0, Math.max(path.lastIndexOf('/'), 0));
        }
        return this.getLocation().slice(0, Math.max(this.getLocation().lastIndexOf('/'), 1));
    }

    returnScreen() {
        if (!this.modal) {
            if (this.edit) {
                this.router.navigate([this.getParentPath(this.getParentPath())]);
            } else {
                this.router.navigate([this.getParentPath()]);
            }
        }
    }

}
