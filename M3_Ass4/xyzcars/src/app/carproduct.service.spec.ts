import { TestBed } from '@angular/core/testing';

import { CarproductService } from './carproduct.service';

describe('CarproductService', () => {
  let service: CarproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
