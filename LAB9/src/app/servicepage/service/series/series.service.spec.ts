import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SumSeries: x=0.1, y=0.8200', () => {
    const x = 0.1;
    const y = '0.8200';
    const y1 = service.getSeries(x);
    expect(y).toBe(y1.toFixed(4));
    
  });
});
