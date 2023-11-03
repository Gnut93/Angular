import { TestBed } from '@angular/core/testing';

import { DuanServiceService } from './duan-service.service';

describe('DuanServiceService', () => {
  let service: DuanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
