import { TestBed } from '@angular/core/testing';

import { AllProductsApiService } from './all-products-api.service';

describe('AllProductsApiService', () => {
  let service: AllProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
