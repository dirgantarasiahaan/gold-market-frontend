import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterRoutingModule } from '../../register-routing.module';
import { Location } from "@angular/common"

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: Location
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule.withRoutes([]), RegisterRoutingModule],
    })
    .compileComponents();

    router = TestBed.inject(Router)
        location = TestBed.inject(Location)
        fixture = TestBed.createComponent(RegisterComponent);
        router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('navigate to "" redirect you to /register', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })
}))
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
