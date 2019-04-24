import { ActivatedRoute } from '@angular/router';

declare const $: any;

export class Util {

    static isViewMode(activatedRoute: ActivatedRoute): any {
        return (!activatedRoute.snapshot.queryParamMap.has('mode') || activatedRoute.snapshot.queryParamMap.get('mode') === 'view');
    }

    static isEditMode(activatedRoute: ActivatedRoute): any {
        return (!activatedRoute.snapshot.queryParamMap.has('mode') || activatedRoute.snapshot.queryParamMap.get('mode') === 'edit');
    }

    static insertRequestParam(baseUrl, key, value) {

        key = encodeURI(key);
        value = encodeURI(value);

        let paramsUrl = '';
        if (baseUrl.split('?').length > 1) {
            paramsUrl = baseUrl.split('?')[1];
        }

        const kvp = paramsUrl.split('&');
        let i = kvp.length;
        let x;
        while (i--) {
            x = kvp[i].split('=');

            if (x[0] === key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) { kvp[paramsUrl === '' ? 0 : kvp.length] = [key, value].join('='); }

        return baseUrl.split('?')[0] + '?' + kvp.join('&');
    }

    public static isDateBeforeToday(date) {
        return date && new Date(date.toDateString()) < new Date(new Date().toDateString());
    }

    public static hideSideBar(): any {
        // Hide SideBar
        setTimeout(() => {
            if (!$('body').hasClass('sidebar-mini')) {
                $('#minimizeSidebar').click();
            }
        }, 250);
    }

    public static showSideBar(): any {
        // Hide SideBar
        setTimeout(() => {
            if ($('body').hasClass('sidebar-mini')) {
                $('#minimizeSidebar').click();
            }
        }, 250);
    }

    public static toDate(args?: string | Date): Date | any {
        let date = new Date();

        if (args && typeof (args) === 'string') {
            date = new Date(args);
        } else {
            return args || date;
        }

        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        const dateWithout = new Date(date.getTime() + userTimezoneOffset);

        return dateWithout;
    }

    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }



}
