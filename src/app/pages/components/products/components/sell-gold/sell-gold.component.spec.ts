import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from '../../../profile/components/profile/components/template-profile/services/profile.service';

import { SellGoldComponent } from './sell-gold.component';

describe('SellGoldComponent', () => {
  let component: SellGoldComponent;
  let fixture: ComponentFixture<SellGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellGoldComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ProfileService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submiting  a form transaction', () => {
    expect(component.formTransaction.valid).toBeTrue();
    component.formTransaction.controls['idr'].setValue(1)
    component.formTransaction.controls['valueOnGram'].setValue(100)
    expect(component.formTransaction.valid).toBeTrue();
  })
});
