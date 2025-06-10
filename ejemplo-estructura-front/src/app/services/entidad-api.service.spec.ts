import { TestBed } from '@angular/core/testing';

import { EntidadApiService } from './entidad-api.service';

describe('EntidadApiService', () => {
  let service: EntidadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
