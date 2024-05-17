import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  positiveNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value && value > 0 ? null : { notPositiveNumber: true };
  }

  amountNumber(
    min: number,
    max: number
  ): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && value >= min && value <= max
        ? null
        : { numberOutOfRange: true };
    };
  }

  unitOfMeasurement(control: AbstractControl): Observable<ValidationErrors | null> {
    const allowedUnits = ['грам', 'шт', 'мл']; // додайте інші одиниці, які потрібно допустити
    const value = control.value;
    if (value && typeof value === 'string') {
      const unit = value.trim().toLowerCase();
      if (allowedUnits.includes(unit)) {
        return of(null);
      } else {
        return of({ invalidUnitOfMeasurement: true });
      }
    }
    return of(null);
  }
}
