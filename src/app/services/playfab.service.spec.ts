import { TestBed } from '@angular/core/testing';

import { PlayfabService } from './playfab.service';

describe('PlayfabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayfabService = TestBed.get(PlayfabService);
    expect(service).toBeTruthy();
  });
});
