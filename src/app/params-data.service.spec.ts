import { TestBed } from '@angular/core/testing';

import { ParamsDataService } from './params-data.service';

describe('ParamsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamsDataService = TestBed.get(ParamsDataService);
    expect(service).toBeTruthy();
  });
});
