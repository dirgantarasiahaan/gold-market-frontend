
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { ProductsService } from '../../../service/products.service';
import { TransactionService } from '../service/transaction.service';
import { TransactionRoutingModule } from '../transaction-routing.module';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
  let element: HTMLElement;
  let element2: HTMLElement;
  let transactionService: TransactionService
  let productService : ProductsService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule.forRoot([]),
      RouterTestingModule.withRoutes([]), TransactionRoutingModule
    ],
    providers: [TransactionService, ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h5')
    element2 = fixture.nativeElement.querySelector('p')
    fixture.detectChanges();
    transactionService = TestBed.inject(TransactionService)
    productService = TestBed.inject(ProductsService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#h5', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Detail Transaction")
  })

  it('#p', () => {
    fixture.detectChanges();
    expect(element2.textContent).toEqual(" Pocket : Select Pockets")
  })

  it('#function purchase', () => {
    const response = {}
    const customerId = '8a68e47278f8d7b30178f8d865960001'
    const purchase = {
      "purchaseType":"1",
      "purchaseDetails": [
          {
              "quantityInGram":1,
              "pocket":{
                  "id":"4028e4907912fcd6017912ff68440001"
              }
          }
      ]
  }
    const spy = spyOn(transactionService, 'purchase').and.callFake((customerId, purchase): Observable<any> => {
      return from([response])
    })
    component.purchase()
    expect(spy).toHaveBeenCalled()
  });

  it('#function getPocketByCustIdProdId', () => {
    const response = []
    const customerId = '8a68e47278f8d7b30178f8d865960001'
    const productId = '8a68e47278fdeeed0178fdf13eef0002'
    const spy = spyOn(productService, 'getPocketByCustIdProdId').and.callFake((customerId, productId): Observable<any> => {
      return from([response])
    })
    component.getPocketByCustIdProdId(productId)
    expect(spy).toHaveBeenCalled()
  });
});


