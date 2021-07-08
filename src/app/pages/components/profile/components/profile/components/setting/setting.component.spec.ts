import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingRoutingModule } from './setting-routing.module';
import { Location } from "@angular/common"
import { SettingComponent } from './setting.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../template-profile/services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from, Observable } from 'rxjs';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;
  let location: Location
  let router: Router
  let profileService: ProfileService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingComponent ],
      imports: [RouterTestingModule.withRoutes([]), SettingRoutingModule, HttpClientTestingModule,
      FormsModule,
      ReactiveFormsModule],
      providers: [ProfileService]
    })
    .compileComponents();

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(SettingComponent);
    router.initialNavigation();
    profileService = TestBed.inject(ProfileService)
  });

  it('navigate to "" redirect you to /setting', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })
    tick(50)
}))

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title', () => {
    expect(component.title).toEqual('Setting Profile')
  });

  it('should form', () => {
    expect(component.form.valid).toBeTruthy()
    component.form.controls['firstName'].setValue('test')
    component.form.controls['lastname'].setValue('test')
    component.form.controls['username'].setValue('test')
    component.form.controls['password'].setValue('test')
    component.form.controls['email'].setValue('test')
    component.form.controls['status'].setValue(1)
    component.form.controls['birthDate'].setValue('test')
    component.form.controls['address'].setValue('test')
    component.form.controls['phone'].setValue('test')
    expect(component.form.valid).not.toBeNull()
  });

  it('#function editUserByCustId', () => {
    const response = {}
    const customer =  {
      "id": 100,
      "firstName": "updateeee",
      "lastName": "siaa",
      "birthDate": "2020-02-01T17:00:00.000+00:00",
      "address": "jalan",
      "status": 1,
      "username": "updtdirga",
      "password": "abcd",
      "email": "@gmail"
  }
    const spy = spyOn(profileService, 'updateUserById').and.callFake((customer): Observable<any> => {
      return from([response])
    })
    component.editUserByCustId()
    expect(spy).toHaveBeenCalled()

  });

  it('#function getUserByCUstId', () => {
    const response = {}
    const customerId = '8a68e47278f8d7b30178f8d865960001'
    const spy = spyOn(profileService, 'getUserById').and.callFake((customerId): Observable<any> => {
      return from([response])
    })
    component.getUser()
    expect(spy).toHaveBeenCalled()

  });
});
