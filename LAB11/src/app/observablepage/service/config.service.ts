import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { Spec } from './Spec'; 
import { SpecList } from './SpecList';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  currentSpec = DEFAULT_SPEC;
  spec$: BehaviorSubject<Spec> = new BehaviorSubject<Spec>(DEFAULT_SPEC);
  setSpec(spec: Spec) {
    console.log("є зміни!!!");
    this.spec$.next(spec);
  }

  constructor() { }
}

const DEFAULT_SPEC = {"id": 0, "name": "Комп'ютерні науки"};