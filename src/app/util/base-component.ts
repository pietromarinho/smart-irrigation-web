import { ControlValueAccessor } from '@angular/forms';
import { BaseCommons } from '../views/generic/generic-form/base-commons';
const noop = () => {
};

export abstract class BaseComponent extends BaseCommons implements ControlValueAccessor {
    public isDisabled: boolean;
    // The internal data model
    private innerValue: any = '';
    public onTouchedCallback: () => void = noop;
    public onChangeCallback: (_: any) => void = noop;
    // get accessor
    public get value(): any {
        return this.innerValue;
    };
    // set accessor including call the onchange callback
    public set value(v: any) {
        if (!v) {
            v = null;
        }
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // Set touched on blur
    public onBlur() {
        this.onTouchedCallback();
    }
    abstract writeValue(value: any);
    // {
    //     if (value !== this.value) {
    //         this.value = value;
    //         this._value = value;
    //     }
    // }
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
}