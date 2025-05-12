import { TestBed } from '@angular/core/testing';

import { EnLangService } from './en-lang.service';

describe('EnLangService', () => {
  let service: EnLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
