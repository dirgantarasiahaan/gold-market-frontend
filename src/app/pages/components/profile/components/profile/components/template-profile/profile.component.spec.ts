import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileRoutingModule } from '../../../../profile-routing.module';
import { ProfileComponent } from './profile.component';
import { Location } from "@angular/common"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from './services/profile.service';
import { from, Observable } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let location: Location
  let router: Router
  let profileService: ProfileService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [RouterTestingModule, RouterTestingModule.withRoutes([]), ProfileRoutingModule, HttpClientTestingModule],
      providers: [ProfileService]
    })
    .compileComponents();

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(ProfileComponent);
    router.initialNavigation();
    profileService = TestBed.inject(ProfileService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    expect(component.logout).toBeTruthy();
  });

  it('#function getUserById', () => {
    const response = []
    const customerId: string = '8a68e47278fdeeed0178fdf13eef0002'
    const spy = spyOn(profileService, 'getUserById').and.callFake((customerId): Observable<any> => {
      return from([response])
    })
    component.getUser();
    expect(spy).toHaveBeenCalled();

  });

  it('logout', () => {
    component.logout()
    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return null;
  });
  })


});
