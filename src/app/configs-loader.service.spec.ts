import { TestBed } from '@angular/core/testing';

import { ConfigsLoaderService } from './configs-loader.service';

describe('ConfigsLoaderService', () => {
  let service: ConfigsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
