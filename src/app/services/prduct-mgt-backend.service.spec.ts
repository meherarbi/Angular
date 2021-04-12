import { TestBed } from '@angular/core/testing';

import { PrductMgtBackendService } from './prduct-mgt-backend.service';

describe('PrductMgtBackendService', () => {
  let service: PrductMgtBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrductMgtBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
