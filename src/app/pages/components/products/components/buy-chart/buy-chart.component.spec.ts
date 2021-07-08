import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { ProductsService } from '../../service/products.service';
import { TransactionRoutingModule } from '../transaction/transaction-routing.module';

import { BuyChartComponent } from './buy-chart.component';

describe('BuyChartComponent', () => {
  let component: BuyChartComponent;
  let fixture: ComponentFixture<BuyChartComponent>;
  let productService: ProductsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyChartComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.inject(ProductsService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#variabel', () => {
    expect(component.no).toEqual(0);
  });

  it('#function getProductHistoryPrice', () => {
    const response = [
      {
          "id": "8a68e47278fdeeed0178fdf13ef10003",
          "historyDate": "2021-04-23T08:55:49.230+00:00",
          "priceBuy": 300,
          "priceSell": 350,
          "product": {
              "id": "8a68e47278fdeeed0178fdf13eef0002",
              "productName": "Gold",
              "productPriceBuy": 300,
              "productPriceSell": 350,
              "productImage": "../../../../../../assets/2.png",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00"
          }
      },
      {
          "id": "4028e4907912fcd60179130c4d71099a",
          "historyDate": "2021-06-29T09:48:34.242+00:00",
          "priceBuy": 330,
          "priceSell": 400,
          "product": {
              "id": "8a68e47278fdeeed0178fdf13eef0002",
              "productName": "Gold",
              "productPriceBuy": 300,
              "productPriceSell": 350,
              "productImage": "../../../../../../assets/2.png",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00"
          }
      },
      {
          "id": "4028e4907912fcd60179130c4d71088a",
          "historyDate": "2021-06-29T09:48:34.242+00:00",
          "priceBuy": 340,
          "priceSell": 380,
          "product": {
              "id": "8a68e47278fdeeed0178fdf13eef0002",
              "productName": "Gold",
              "productPriceBuy": 300,
              "productPriceSell": 350,
              "productImage": "../../../../../../assets/2.png",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00"
          }
      }
  ]
    const productId: string = '8a68e47278fdeeed0178fdf13eef0002'
    const spy = spyOn(productService, 'getProductHistoryPrice').and.callFake((productId): Observable<any> => {
      return from([response])
    })

    component.getProductHistoryPrice(productId)
    expect(spy).toHaveBeenCalled()

  });
});
