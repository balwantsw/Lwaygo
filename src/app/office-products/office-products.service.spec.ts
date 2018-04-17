import { TestBed, inject } from '@angular/core/testing';

import { OfficeProductsService } from './office-products.service';

describe('OfficeProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeProductsService]
    });
  });

  it('should be created', inject([OfficeProductsService], (service: OfficeProductsService) => {
    expect(service).toBeTruthy();
  }));
});
