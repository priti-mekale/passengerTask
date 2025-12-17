import { TestBed } from '@angular/core/testing';

import { SnakbarserviceService } from './snakbarservice.service';

describe('SnakbarserviceService', () => {
  let service: SnakbarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakbarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
