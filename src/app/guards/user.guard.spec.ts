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
  });

  it('should be created', inject([UserGuard], (guard: UserGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should authorize a logged user', inject([UserGuard], (guard: UserGuard) => {
    spyOn(localStorage, 'getItem').and.returnValue("37893824");
    let result = userGuard.canActivate(next, state);
    
    expect(result).toBeTruthy();
  }))

  it('should unauthorize an unlogged user', inject([UserGuard], (guard: UserGuard) => {
    spyOn(localStorage, 'getItem').and.returnValue("");

    let result = userGuard.canActivate(next, state);

    expect(result).toBeFalsy();
  }))
});
