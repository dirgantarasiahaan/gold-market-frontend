import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common"

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from '../login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location
  let router: Router


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule,
                RouterTestingModule, LoginRoutingModule,
                RouterTestingModule.withRoutes([]), ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();

        router = TestBed.inject(Router)
        location = TestBed.inject(Location)
        fixture = TestBed.createComponent(LoginComponent);
        router.initialNavigation();
        component = fixture.componentInstance;
  });


  it('navigate to "" redirect you to /login', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })
}))

describe('#ReactiveForm', () => {
  it('label field validity', () => {
      let error: any = {};
      let label = component.loginForm.controls['username']
      expect(label.valid).toBeFalsy();

      error = label.errors || {};
      expect(error['required']).toBeTruthy()

      label.setValue('Reading');
      error = label.errors || {};
      expect(error['required']).toBeFalsy(),
      expect(error['minlength']).toBeFalsy()
  });

  it('submiting  a form emits a username', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue('Travelling')
    expect(component.loginForm.valid).toBeFalsy();
    component.submitForm();
  })

})

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
