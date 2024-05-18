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
    this.spec$.next(spec);
  }

  constructor() { }
}

var specList = new SpecList();
const DEFAULT_SPEC = specList.spec.get(0);