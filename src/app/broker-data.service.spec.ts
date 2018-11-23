import { TestBed } from '@angular/core/testing';

import { BrokerDataService } from './broker-data.service';

describe('BrokerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrokerDataService = TestBed.get(BrokerDataService);
    expect(service).toBeTruthy();
  });
});
