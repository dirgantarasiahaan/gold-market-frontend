import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingRoutingModule } from './setting-routing.module';
import { Location } from "@angular/common"
import { SettingComponent } from './setting.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../template-profile/services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;
  let location: Location
  let router: Router

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
});
