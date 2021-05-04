import { TestBed } from '@angular/core/testing';

import { ResultadosFirebaseService } from './resultados-firebase.service';

describe('ResultadosFirebaseService', () => {
  let service: ResultadosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
