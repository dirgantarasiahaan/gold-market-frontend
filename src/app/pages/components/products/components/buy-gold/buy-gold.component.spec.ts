import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from '../../../profile/components/profile/components/template-profile/services/profile.service';

import { BuyGoldComponent } from './buy-gold.component';

describe('BuyGoldComponent', () => {
  let component: BuyGoldComponent;
  let fixture: ComponentFixture<BuyGoldComponent>;
  let element: HTMLElement;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGoldComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ProfileService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BuyGoldComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('p')
    button = fixture.nativeElement.querySelector('button')
  });

  it('#p', () => {
    expect(element.textContent).toEqual('Value on IDR')
    expect(element.textContent).not.toBeUndefined()
    expect(element.textContent).not.toBeNull()
  });

  it('#button', () => {
    expect(button.textContent).toEqual('Next')
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submiting  a form transaction', () => {
    expect(component.formTransaction.valid).toBeFalsy();
    component.formTransaction.controls['idr'].setValue(1)
    component.formTransaction.controls['valueOnGram'].setValue(100)
    expect(component.formTransaction.valid).toBeTrue();
  })

  it('submiting  a init form', () => {
    component.formTransaction.controls['idr'].setValue(1)
    component.formTransaction.controls['valueOnGram'].setValue(100)
    expect(component.initForm()).toBeUndefined();
  })


});
