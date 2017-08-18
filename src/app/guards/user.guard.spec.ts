import { TestBed, async, inject } from '@angular/core/testing';

import { UserGuard } from './user.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


describe('UserGuard', () => {
  let userGuard : UserGuard;
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGuard]
    });
    userGuard = new UserGuard();
    spyOn(localStorage, 'getItem').and.returnValue(true);
  });


  it('should be created', inject([UserGuard], (guard: UserGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should authorize a logged user', inject([UserGuard], (guard: UserGuard) => {

    let result = userGuard.canActivate(next, state);

    expect(result).toBeTruthy();
  }))
});
