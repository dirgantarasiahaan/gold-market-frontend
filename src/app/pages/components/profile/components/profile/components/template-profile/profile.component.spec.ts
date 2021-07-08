import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileRoutingModule } from '../../../../profile-routing.module';
import { ProfileComponent } from './profile.component';
import { Location } from "@angular/common"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from './services/profile.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let location: Location
  let router: Router

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
  });

//   it('navigate to "" redirect you to /profile', fakeAsync(() => {
//     router.navigate([""]).then(() => {
//         tick(50);
//         flushMicrotasks()
//         expect(location.path()).toBe('/')
//     })
// }))

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
});
