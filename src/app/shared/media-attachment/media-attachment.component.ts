import { Component, ViewChild, ElementRef, NgModule, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscriber } from 'rxjs/Subscriber';
import { FileService } from 'app/service/file/file.service';
import { MediaFile } from 'app/model/media-file.model';
import Optional from 'typescript-optional';
import { MatTooltipModule } from '@angular/material';
import { TagInputModule } from 'ngx-chips';
import { BaseCommons } from '../../views/generic/generic-form/base-commons';
import { MessageType } from '../../service/toast-notification-service/message-type.enum';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MediaAttachmentComponent),
    multi: true
};

@Component({
    selector: 'app-media-attachment',
    templateUrl: './media-attachment.component.html',
    styleUrls: ['./media-attachment.component.scss'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FileService]
})
export class MediaAttachmentComponent extends BaseCommons implements ControlValueAccessor {

    @Input() fileName;

    isDisabled: boolean;
    upload: any;
    fileValueChange: Subscriber<any>;
    options = [{ name: 'Foto', value: 'PICTURE2D' }, { name: 'Video', value: 'VIDEO2D' }];

    // The internal data model
    private innerValue: any = '';

    // Placeholders for the callbacks which are later providesd
    // by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    // get accessor
    get value(): any {
        return this.innerValue;
    };

    // set accessor including call the onchange callback
    set value(v: any) {
        if (!v) {
            v = null;
        }
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    @ViewChild('file')
    private fileInput: ElementRef;

    constructor(fileService: FileService) {
        super(fileService);

        this.selectFile = this.selectFile.bind(this);
    }

    // Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    // From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    // From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    // From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    onfileUploaded(obj: MediaFile, key: string) { }

    selectFile(selected) {

        if (this.isDisabled) {
            return;
        }

        const self = this;

        if (selected.indexOf('PICTURE') >= 0) {
            this.fileInput.nativeElement.accept = '.jpg, .jpeg, .png, .gif, .bmp|images/*';
        } else if (selected.indexOf('VIDEO') >= 0) {
            this.fileInput.nativeElement.accept = '.mp4, .webm, .rmvb, .avi|video/*';
        } else {
            this.fileInput.nativeElement.accept = '';
        }

        this.onfileUploaded =
            function (obj: any, key: string) {
                this.value = obj;
            }.bind(self);

        this.upload = (fileInput) => {

            if (this.isDisabled) {
                return;
            }

            if (selected.indexOf('PICTURE') >= 0) {
                const mb = 1000 * 1000;
                if (fileInput.files[0].size < 2 * mb) {
                    self.uploadPhoto(fileInput, self.onfileUploaded);
                } else {
                    this.toast('Por favor, escolha uma imagem com menos de 40KB', MessageType.WARNING);
                }
            } else if (selected.indexOf('VIDEO') >= 0) {
                self.uploadVideo(fileInput, self.onfileUploaded);
            }
        };

        this.fileInput.nativeElement.click();
    }

    getIconClass(item: MediaFile) {
        const ext = Optional.ofNullable(item.extension).orElse('').trim();

        if (item.type.indexOf('PICTURE') >= 0 || '.jpg, .jpeg, .png, .gif, .bmp|images/*'.indexOf(ext) >= 0) {
            return 'image';
        }

        if (item.type.indexOf('VIDEO') >= 0 || '.mp4, .webm, .rmvb, .avi|video/*'.indexOf(ext) >= 0) {
            return 'video-camera';
        }

        return 'file';
    }

    clearAttachment(file) {
        this.fileInput.nativeElement.value = '';
        super.clearAttachment(file);

        this.value = null;
    }
}

@NgModule({
    declarations: [MediaAttachmentComponent],
    imports: [MatTooltipModule, TagInputModule, CommonModule, FormsModule,
        ReactiveFormsModule],
    exports: [MediaAttachmentComponent]
})
export class MadiaAttachmentModule { }
