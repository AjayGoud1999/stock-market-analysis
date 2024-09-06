import { TestBed } from '@angular/core/testing';

import { TopgainersLosersService } from './topgainers-losers.service';

describe('TopgainersLosersService', () => {
  let service: TopgainersLosersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopgainersLosersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
