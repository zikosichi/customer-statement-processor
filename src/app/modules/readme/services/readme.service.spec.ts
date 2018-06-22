import { TestBed, inject } from '@angular/core/testing';

import { ReadmeService } from './readme.service';

describe('ReadmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadmeService]
    });
  });

  it('should be created', inject([ReadmeService], (service: ReadmeService) => {
    expect(service).toBeTruthy();
  }));
});
