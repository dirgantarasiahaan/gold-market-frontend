import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common"

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from '../login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../service/login.service';

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
      let label = component.form.controls['username']
      expect(label.valid).toBeFalsy();

      error = label.errors || {};
      expect(error['required']).toBeTruthy()

      label.setValue('Reading');
      error = label.errors || {};
      expect(error['required']).toBeFalsy(),
      expect(error['minlength']).toBeFalsy()
  });

  it('submiting  a form emits a username', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['username'].setValue('dirgaaa')
    expect(component.form.valid).toBeFalsy();
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

describe('LoginComponent()', () => {
  let fixture: ComponentFixture<LoginComponent>
  let component: LoginComponent;
  let element: HTMLElement;
  let element1: HTMLElement;
  let element2: HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h3')
    element1 = fixture.nativeElement.querySelector('p')
    element2 = fixture.nativeElement.querySelector('button')
  })

  it('should display original title', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Don't have and Account")
  })
  it('should display paragraph', () => {
    fixture.detectChanges();
    expect(element1.textContent).toEqual("Let us help you register with pleasure.")
  })
  it('should display button', () => {
    fixture.detectChanges();
    expect(element2.textContent).toEqual("Register")
  })

})
