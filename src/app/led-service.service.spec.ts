import { TestBed } from '@angular/core/testing';

import { LedServiceService } from './led-service.service';

describe('LedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LedServiceService = TestBed.get(LedServiceService);
    expect(service).toBeTruthy();
  });
});
