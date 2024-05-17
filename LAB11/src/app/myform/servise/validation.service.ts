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

  amountNumber(min: number, max: number): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && value >= min && value <= max ? null : { numberOutOfRange: true };
    };
  }

  unitOfMeasurement(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
  const validUnits = ['грам', 'л', 'шт'];
  const lowercaseValue = value ? value.toLowerCase() : '';
  return validUnits.includes(lowercaseValue) ? null : { invalidUnit: true };
  }
}