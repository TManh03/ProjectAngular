import { TestBed } from '@angular/core/testing';

import { TruncatePipeService } from './truncate.pipe.service';

describe('TruncatePipeService', () => {
  let service: TruncatePipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruncatePipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
