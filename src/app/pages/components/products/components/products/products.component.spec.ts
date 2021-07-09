import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsRoutingModule } from '../../products-routing.module';
import { Location } from "@angular/common"

import { ProductsComponent } from './products.component';
import { ProductsService } from '../../service/products.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from, Observable } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let location: Location
  let router: Router
  let element: HTMLElement;
  let element2: HTMLElement
  let productService: ProductsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [RouterTestingModule.withRoutes([]), ProductsRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule, FormsModule],
      providers: [ProductsService]
    }).compileComponents();

    router = TestBed.inject(Router)

    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    element = fixture.nativeElement.querySelector('h6')
    element2 = fixture.nativeElement.querySelector('button')
    productService = TestBed.inject(ProductsService)


  });

  it('navigate to "" redirect you to /products', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })

}))

  it('#H6', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Buy Price")
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function addPocket', () => {
    expect(component.addPocket).toBeUndefined;
  });

  it('= chartBuy', () => {
    expect(component.chartBuy).toEqual('btn btn-primary')
    expect(component.chartSell).toEqual('btn btn-light')
    expect(component.buy).toEqual('active')
  });

  it('submiting  a form emits a username', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['pocketName'].setValue('dirgaaa')
    component.form.controls['pocketQty'].setValue('dirgaaa')
    component.form.controls['totalAmount'].setValue('dirgaaa')
    expect(component.form.valid).toBeTrue();
  })

  it('submiting  changeactive', () => {
    const value: string = 'buy'
    component.changeActive(value)
    expect(component.buy).toEqual('active');
    const value2 : string = 'sell'
    component.changeActive(value2)
    expect(component.sell).toEqual('active');
    const value3: string = 'error'
    expect(component.changeActive(value3)).toBeUndefined()
  })

  it('submiting  changechart', () => {
    expect(component.chartBuy).toEqual('btn btn-primary');
    expect(component.chartSell).toEqual('btn btn-light');
    const value: string = 'buy'
    component.changeChart(value)
    expect(component.chartBuy).toEqual('btn btn-primary');
    expect(component.chartSell).toEqual('btn btn-light');
    const value2 : string = 'sell'
    component.changeChart(value2)
    expect(component.chartSell).toEqual('btn btn-primary');
    expect(component.chartBuy).toEqual('btn btn-light');
  })

  it('#function addPocket', () => {
    const response = {}
    const pocket = {
      "pocketName" : "testing product",
      "customer" :{
          "id" : "4028e4907a5c1183017a5c1311880001"
      },
      "product" : {
          "id" : "c001"
      }
  }
    const spy = spyOn(productService, 'addPocket').and.callFake((pocket): Observable<any> => {
      return from([response])
    })

    component.addPocket()
    expect(spy).toHaveBeenCalled()
  });


  it('#function deletePocket', () => {
    const response = {}
    const pocketId = '4028e4907912fcd6017912ff68440001'
    const spy = spyOn(productService, 'deletePocket').and.callFake((pocketId): Observable<any> => {
      return from([response])
    })
    component.deletePocket(pocketId)
    expect(spy).toHaveBeenCalled()
  });

  it('#function updatePocket', () => {
    const response = {}
    const pocket = {
      "id": "402881967a4c839c017a4d400e70000c",
       "pocketName": "bubu",
       "pocketQty": 1.0,
       "customer": {
           "id": "402881837a4896cd017a48c14dda0003"
       },
       "product": {
           "id": "1"
       }
   }
    const spy = spyOn(productService, 'updatePocketById').and.callFake((pocket): Observable<any> => {
      return from([response])
    })
    component.updatePocket(pocket.pocketName)
    expect(spy).toHaveBeenCalled()
  });

  // it('#function getPocketByCustIdProdId', () => {
  //   const response = [
  //     {
  //         "id": "4028e4907a7e9682017a7e9dba960000",
  //         "pocketName": "pocket 4",
  //         "totalAmount": 0.0,
  //         "pocketQty": 0.0,
  //         "customer": {
  //             "id": "8a68e47278f8d7b30178f8d865960001",
  //             "firstName": "dirgantara",
  //             "lastName": "siahaan",
  //             "birthDate": "2020-02-01T17:00:00.000+00:00",
  //             "address": "jalan",
  //             "status": 1,
  //             "username": "dirga",
  //             "password": "password",
  //             "email": "siahaandirgantara@gmail",
  //             "phoneNumber": "0899999"
  //         },
  //         "product": {
  //             "id": "c001",
  //             "productName": "Silver",
  //             "productPriceBuy": 100,
  //             "productPriceSell": 200,
  //             "productImage": "../../../../../../assets/3.png",
  //             "productStatus": 1,
  //             "historyPrice": [
  //                 {
  //                     "id": "8a68e47278fdeeed0178fdf089ca0001",
  //                     "historyDate": "2021-04-23T08:55:02.826+00:00",
  //                     "priceBuy": 300,
  //                     "priceSell": 350,
  //                     "product": {
  //                         "id": "c001",
  //                         "productName": "Silver",
  //                         "productPriceBuy": 100,
  //                         "productPriceSell": 200,
  //                         "productImage": "../../../../../../assets/3.png",
  //                         "productStatus": 1,
  //                         "createdAt": "2021-04-21T17:00:00.000+00:00",
  //                         "updatedAt": "2021-04-21T17:00:00.000+00:00"
  //                     }
  //                 }
  //             ],
  //             "createdAt": "2021-04-21T17:00:00.000+00:00",
  //             "updatedAt": "2021-04-21T17:00:00.000+00:00"
  //         }
  //     },
  //     {
  //         "id": "4028e4907a5c1183017a5c14de530004",
  //         "pocketName": "testing product",
  //         "totalAmount": 10000.0,
  //         "pocketQty": 100.0,
  //         "customer": {
  //             "id": "8a68e47278f8d7b30178f8d865960001",
  //             "firstName": "dirgantara",
  //             "lastName": "siahaan",
  //             "birthDate": "2020-02-01T17:00:00.000+00:00",
  //             "address": "jalan",
  //             "status": 1,
  //             "username": "dirga",
  //             "password": "password",
  //             "email": "siahaandirgantara@gmail",
  //             "phoneNumber": "0899999"
  //         },
  //         "product": {
  //             "id": "c001",
  //             "productName": "Silver",
  //             "productPriceBuy": 100,
  //             "productPriceSell": 200,
  //             "productImage": "../../../../../../assets/3.png",
  //             "productStatus": 1,
  //             "historyPrice": [
  //                 {
  //                     "id": "8a68e47278fdeeed0178fdf089ca0001",
  //                     "historyDate": "2021-04-23T08:55:02.826+00:00",
  //                     "priceBuy": 300,
  //                     "priceSell": 350,
  //                     "product": {
  //                         "id": "c001",
  //                         "productName": "Silver",
  //                         "productPriceBuy": 100,
  //                         "productPriceSell": 200,
  //                         "productImage": "../../../../../../assets/3.png",
  //                         "productStatus": 1,
  //                         "createdAt": "2021-04-21T17:00:00.000+00:00",
  //                         "updatedAt": "2021-04-21T17:00:00.000+00:00"
  //                     }
  //                 }
  //             ],
  //             "createdAt": "2021-04-21T17:00:00.000+00:00",
  //             "updatedAt": "2021-04-21T17:00:00.000+00:00"
  //         }
  //     }
  // ]
  //   const customerId = '8a68e47278f8d7b30178f8d865960001'
  //   const productId = 'c001'
  //   const spy = spyOn(productService, 'getPocketByCustIdProdId').and.callFake((customerId, productId): Observable<any> => {
  //     return from([response])
  //   })
  //   component.data = response
  //   component.getPocketByCustIdProdId(productId)
  //   expect(spy).toHaveBeenCalled()
  // });

  it('#function getPocketById', () => {
    const response = {}
    const pocketId = '402881967a4c839c017a4d400e70000c'
    const spy = spyOn(productService, 'getPocketById').and.callFake((pocketId): Observable<any> => {
      return from([response])
    })
    component.getPocketById(pocketId)
    expect(spy).toHaveBeenCalled()
  });


  it('#function getProductById', () => {
    const response = {
      "id": "c001",
      "productName": "Silver",
      "productPriceBuy": 100,
      "productPriceSell": 200,
      "productImage": "../../../../../../assets/3.png",
      "productStatus": 1,
      "historyPrice": [
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
      ],
      "createdAt": "2021-04-21T17:00:00.000+00:00",
      "updatedAt": "2021-04-21T17:00:00.000+00:00"
  }
    const productId = 'c001'
    const spy = spyOn(productService, 'getProductById').and.callFake((productId): Observable<any> => {
      return from([response])
    })
    component.getProductById(productId)
    expect(spy).toHaveBeenCalled()
  });
});




