import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  positiveNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value && value > 0 ? null : { notPositiveNumber: true };
  }
}