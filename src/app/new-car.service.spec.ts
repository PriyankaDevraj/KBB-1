import { TestBed } from '@angular/core/testing';

import { NewCarService } from './new-car.service';

describe('NewCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewCarService = TestBed.get(NewCarService);
    expect(service).toBeTruthy();
  });
});
