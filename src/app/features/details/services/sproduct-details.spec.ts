import { TestBed } from '@angular/core/testing';

import { SproductDetails } from './sproduct-details';

describe('SproductDetails', () => {
  let service: SproductDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproductDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
