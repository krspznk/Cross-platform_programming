import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SumSeries: x=0.1, y=0.8191', () => {
    let x = 0.1;
    let y = 0.8191;
    let result = service.getTab(x);
    let y1 = result.get(x);

    if (y1 !== undefined) {
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
