import { BaseModel } from './base.model';

export class MediaFile extends BaseModel {
    name: string;
    extension: string;
    type: string;
    creation: Date;
}
