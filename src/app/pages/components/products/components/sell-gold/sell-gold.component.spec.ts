import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { ProfileService } from '../../../profile/components/profile/components/template-profile/services/profile.service';
import { ProductsService } from '../../service/products.service';

import { SellGoldComponent } from './sell-gold.component';

describe('SellGoldComponent', () => {
  let component: SellGoldComponent;
  let fixture: ComponentFixture<SellGoldComponent>;
  let productService: ProductsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellGoldComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ProfileService ,ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.inject(ProductsService)
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

  it('#function getProductHistoryPrice', () => {
    const response = [
      {
          "id": "8a68e47278fdeeed0178fdf089ca0001",
          "historyDate": "2021-04-23T08:55:02.826+00:00",
          "priceBuy": 300,
          "priceSell": 350,
          "product": {
              "id": "c001",
              "productName": "Silver",
              "productPriceBuy": 100,
              "productPriceSell": 200,
              "productImage": "../../../../../../assets/3.png",
              "productStatus": 1,
              "createdAt": "2021-04-21T17:00:00.000+00:00",
              "updatedAt": "2021-04-21T17:00:00.000+00:00"
          }
      }
  ]
    const productId: string = 'c001'
    const spy = spyOn(productService, 'getProductHistoryPrice').and.callFake((productId): Observable<any> => {
      return from([response])
    })

    component.prices = response
    component.getProductHistoryPrice(productId)
    expect(spy).toHaveBeenCalled()

  });

  it('submiting detail', () => {
    expect(component.detailItem()).toBeUndefined()
  })
});
