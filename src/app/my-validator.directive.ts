import { Directive, HostListener, Input } from '@angular/core';
import { NgModel, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[appMyValidator][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MyValidatorDirective, multi: true }]
})
export class MyValidatorDirective implements Validator {
  @Input() appMyValidator;

  validate(c: AbstractControl): ValidationErrors {
    let rc: ValidationErrors;
    console.log('validate', c.value);
    if (c.value !== this.appMyValidator) rc = { 'name': true };
    return rc;
  }

  registerOnValidatorChange(fn: () => void): void {
    console.log('register', fn);
  }
}
