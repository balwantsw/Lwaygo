import { TestBed, inject } from '@angular/core/testing';

import { ManageCategoryService } from './manage-category.service';

describe('ManageCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageCategoryService]
    });
  });

  it('should be created', inject([ManageCategoryService], (service: ManageCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
