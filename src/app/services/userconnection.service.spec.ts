import { TestBed } from '@angular/core/testing';

import { UserconnectionService } from './userconnection.service';

describe('UserconnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserconnectionService = TestBed.get(UserconnectionService);
    expect(service).toBeTruthy();
  });
});
