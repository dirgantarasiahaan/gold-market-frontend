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
  let h4: HTMLElement;
  let p: HTMLElement;

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
        h4 = fixture.nativeElement.querySelector('h4')
        p = fixture.nativeElement.querySelector('p')
  });

  it('should display h4', () => {
    fixture.detectChanges();
    expect(h4.textContent).toEqual("Create Account")
  })

  it('should display p', () => {
    fixture.detectChanges();
    expect(p.textContent).toEqual("Get started with your free account")
  })

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
