import { TestBed } from '@angular/core/testing';

import { JcuSideMenuService } from './jcu-side-menu.service';

describe('JcuSideMenuService', () => {
  let service: JcuSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JcuSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
