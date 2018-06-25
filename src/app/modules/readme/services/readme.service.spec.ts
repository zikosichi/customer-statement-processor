import { TestBed, inject } from '@angular/core/testing';

import { ReadmeService } from './readme.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ReadmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadmeService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([ReadmeService], (service: ReadmeService) => {
    expect(service).toBeTruthy();
  }));
});
