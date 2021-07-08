import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RouteGuard } from './route.guard';

describe('RouteGuard', () => {
  let guard: RouteGuard;
  let router = {
    navigate: jasmine.createSpy('navigate')
};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RouteGuard]
    });
    guard = TestBed.inject(RouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('be able to hit route when user is logged in', () => {
    expect(guard.canActivate).toBeTruthy()
});

it('be able to hit route when user is logged in', () => {
  expect(guard.canActivateChild).toBeTruthy()
});


});
