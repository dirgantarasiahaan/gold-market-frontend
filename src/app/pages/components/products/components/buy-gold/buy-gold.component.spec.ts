import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from '../../../profile/components/profile/components/template-profile/services/profile.service';

import { BuyGoldComponent } from './buy-gold.component';

describe('BuyGoldComponent', () => {
  let component: BuyGoldComponent;
  let fixture: ComponentFixture<BuyGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGoldComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ProfileService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
