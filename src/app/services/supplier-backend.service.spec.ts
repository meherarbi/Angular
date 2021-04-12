import { TestBed } from '@angular/core/testing';

import { SupplierBackendService } from './supplier-backend.service';

describe('SupplierBackendService', () => {
  let service: SupplierBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
