import { TestBed } from '@angular/core/testing';

import { DeLangService } from './de-lang.service';

describe('DeLangService', () => {
  let service: DeLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
