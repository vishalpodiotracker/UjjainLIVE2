import { TestBed } from '@angular/core/testing';

import { PrasadamService } from './prasadam.service';

describe('PrasadamService', () => {
  let service: PrasadamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrasadamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
