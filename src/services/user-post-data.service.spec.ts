import { TestBed } from '@angular/core/testing';

import { UserPostDataService } from './user-post-data.service';

describe('UserPostDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPostDataService = TestBed.get(UserPostDataService);
    expect(service).toBeTruthy();
  });
});
