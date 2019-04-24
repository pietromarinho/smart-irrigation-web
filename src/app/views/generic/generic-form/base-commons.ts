import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';
import { Constant } from 'app/constant/constant';
import { MediaFile } from 'app/model/media-file.model';
import { FileService } from '../../../service/file/file.service';

declare var $: any;

export class BaseCommons {

    obj: any;
    edit: boolean;
    attachMap: Map<string, MediaFile> = new Map<string, MediaFile>();

    constructor(
        public fileService?: FileService
    ) { }

    toast(msg: string, type?: MessageType) {
        //ToastService.show(msg, type);
    }

    setAttachment(key: string, mediaFile: MediaFile) {
        this.attachMap.set(key, mediaFile);
    }

    getAttachment(key: string): MediaFile {
        return this.attachMap.get(key);
    }

    clearAttachment(input) {
        if (input) {
            this.setAttachment(input.key, null);
        }
    }

    uploadPhoto(input, callback?, key?) {
        this.uploadAttachment(input, Constant.MEDIA_TYPE.PICTURE_2D, callback, key);
    }

    uploadVideo(input, callback?, key?) {
        this.uploadAttachment(input, Constant.MEDIA_TYPE.VIDEO_2D, callback, key);
    }

    uploadFile(input, callback?, key?) {
        this.uploadAttachment(input, Constant.MEDIA_TYPE.FILE, callback, key);
    }

    uploadAttachment(input, mediaType, callback?, key?) {

        // tslint:disable-next-line:no-shadowed-variable
        const uploadError = function (error) {

            console.log('Error: ' + error);
            this.toast(error, MessageType.ERROR);

            this.setAttachment(null, key);
            if (input) {
                input.value = '';
            }
            if (callback) {
                callback(null, key);
            }
        }.bind(this);

        try {
            if (!this.fileService) {
                throw new Error('File Service not provided');
            }

            if (input) {
                key = !key ? input.name : key;
                if (!key || key === '') {
                    throw new Error('untraceable key');
                }

                if (input.files && input.files.length > 0) {
                    console.log('uploading: ' + input.value);

                    this.fileService.upload(mediaType, input.files[0])
                        .subscribe(obj => {

                            console.log('File uploaded, storing on key : ' + key);
                            console.log(obj);
                            ToastService.show('File Uploaded !', MessageType.SUCCESS);

                            this.setAttachment(key, obj);
                            if (callback) {
                                callback(obj, key);
                            }
                        });
                }
            }
        } catch (error) {
            uploadError(error);
        }
    }

    getMediaDownloadUrl(media: MediaFile) {
        return Constant.BASE_URL + Constant.FILE + 'download/' + media.id;
    }
}
