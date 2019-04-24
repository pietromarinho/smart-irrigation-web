import { Component, OnInit, forwardRef, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../../util/base-component';
import { ControlValueAccessor, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true
};
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutocompleteComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  private _options;
  private _placeholder;
  private _value;

  private _lastKeyStroke = new Date();
  private _lastSearchResult = null;

  autoControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  @Input()
  set options(opts: Array<string>) {
    this._options = opts;

    this.filteredOptions = this.autoControl.valueChanges.pipe(
      startWith(""),
      map(val => {
        if (this.DateDiff(new Date(), this._lastKeyStroke) > 500) {
          return (this._lastSearchResult = this.filter(val));
        } else {
          return this._lastSearchResult;
        }
      })
    );
  }

  get options(): Array<string> {
    return this._options;
  }

  @Input()
  set placeholder(ph: string) {
    this._placeholder = ph;
  }

  get placeholder(): string {
    return this._placeholder || "NO PLACEHOLDER";
  }

  constructor() {
    super();
  }

  DateDiff(date1, date2) {
    return date1.getTime() - date2.getTime();
  }

  inputChange(newVal) {
    this.value = newVal;
  }

  writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
      this._value = value;
    }
  }

  ngOnInit() { }

  filter(val: string): string[] {
    return (this.options || new Array()).filter(
      option => option.toLowerCase().indexOf((val || '').toLowerCase()) >= 0
    );
  }
}
@NgModule({
  declarations: [AutocompleteComponent],
  imports: [MatTooltipModule, CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule],
  exports: [AutocompleteComponent]
})
export class EasyAutocompleteModule { }
