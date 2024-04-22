import { TestBed, inject } from '@angular/core/testing';
import { ValidationService } from './validation.service';
import { FormControl } from '@angular/forms';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService]
    });
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null for a positive number', () => {
    const control = new FormControl(10);
    const result = service.positiveNumber(control);
    expect(result).toBeNull();
  });

  it('should return error for a non-positive number', () => {
    const control = new FormControl(-10);
    const result = service.positiveNumber(control);
    expect(result).toEqual({ notPositiveNumber: true });
  });

  it('should return null for a number within range', () => {
    const control = new FormControl(50);
    const result = service.amountNumber(0, 100)(control);
    expect(result).toBeNull();
  });

  it('should return error for a number out of range', () => {
    const control = new FormControl(150);
    const result = service.amountNumber(0, 100)(control);
    expect(result).toEqual({ numberOutOfRange: true });
  });

  it('should return null for a valid unit of measurement', () => {
    const control = new FormControl('грам');
    const result = service.unitOfMeasurement(control);
    expect(result).toBeNull();
  });

  it('should return error for an invalid unit of measurement', () => {
    const control = new FormControl('meter');
    const result = service.unitOfMeasurement(control);
    expect(result).toEqual({ invalidUnit: true });
  });

  it('should return null for a valid unit of measurement (case insensitive)', () => {
    const control = new FormControl('ГРАМ');
    const result = service.unitOfMeasurement(control);
    expect(result).toBeNull();
  });
});
