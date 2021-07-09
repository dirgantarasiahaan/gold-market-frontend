import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addpocket api', () => {
    const payload: any = {
      id: 'asdasdsa',
      pocketName: 'test',
      pocketQty: 1,
      totalAmount: 10,
      customer: {
        id: '1231232'
      },
      product: {
        id: '21321321'
      }
    }
    expect(service.addPocket(payload)).toBeTruthy();
  });

  it('addpocket api test', () => {
    const mock: any = {
      id: 'asdasdsa',
      pocketName: 'test',
      pocketQty: 1,
      totalAmount: 10,
      customer: {
        id: '1231232'
      },
      product: {
        id: '21321321'
      }
    }
  service.addPocket(mock).subscribe((response: any) => {
    expect(response).toEqual(mock)
  })

  const request = httpMock.expectOne('http://localhost:8888/pocket')
  request.flush(mock)
  expect(request.request.method).toBe('POST')

  });

  it('getPocketByCustIdProdId api', () => {
    const custId: string = '8a68e47278f8d7b30178f8d865960001'
    const prodId: string = 'c001'
    const mock = [
      {
          "id": "4028e4907a7e9682017a7e9dba960000",
          "pocketName": "pocket 4",
          "totalAmount": 0.0,
          "pocketQty": 0.0,
          "customer": {
              "id": "8a68e47278f8d7b30178f8d865960001",
              "firstName": "dirgantara",
              "lastName": "siahaan",
              "birthDate": "2020-02-01T17:00:00.000+00:00",
              "address": "jalan",
              "status": 1,
              "username": "dirga",
              "password": "password",
              "email": "siahaandirgantara@gmail",
              "phoneNumber": "0899999"
          },
          "product": {
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
      },
      {
          "id": "4028e4907a5c1183017a5c14de530004",
          "pocketName": "testing product",
          "totalAmount": 10000.0,
          "pocketQty": 100.0,
          "customer": {
              "id": "8a68e47278f8d7b30178f8d865960001",
              "firstName": "dirgantara",
              "lastName": "siahaan",
              "birthDate": "2020-02-01T17:00:00.000+00:00",
              "address": "jalan",
              "status": 1,
              "username": "dirga",
              "password": "password",
              "email": "siahaandirgantara@gmail",
              "phoneNumber": "0899999"
          },
          "product": {
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
      }
  ]
    expect(service.getPocketByCustIdProdId(custId, prodId)).toBeTruthy();

    service.getPocketByCustIdProdId(custId, prodId).subscribe((response: any) => {
      expect(response).toBeTruthy()
    })

    const request = httpMock.expectOne(`http://localhost:8888/customer/${custId}/product/${prodId}/pockets`)
    request.flush(mock)
    expect(request.request.method).toBe('GET')
  });

  it('getProductsByCustomerId api', () => {
    const custId: string = '8a68e47278f8d7b30178f8d865960001'
    expect(service.getProductsByCustomerId(custId)).toBeTruthy();

    service.getProductsByCustomerId(custId).subscribe((response: any) => {
      expect(response).toEqual(custId)
    })

    const request = httpMock.expectOne(`http://localhost:8888/customer/${custId}/products`)
    request.flush(custId)
    expect(request.request.method).toBe('GET')
  });

  it('delete api', () => {
    const pocketId: string = '21312312'
    expect(service.deletePocket(pocketId)).toBeTruthy();

    service.deletePocket(pocketId).subscribe((response: any) => {
      expect(response).toEqual(pocketId)
    })

    const request = httpMock.expectOne(`http://localhost:8888/pocket/${pocketId}`)
    request.flush(pocketId)
    expect(request.request.method).toBe('DELETE')
  });

  it('getPocketById api', () => {
    const pocketId: string = '21312312'
    expect(service.getPocketById(pocketId)).toBeTruthy();

    service.getPocketById(pocketId).subscribe((response: any) => {
      expect(response).toEqual(pocketId)
    })

    const request = httpMock.expectOne(`http://localhost:8888/pocket/${pocketId}`)
    request.flush(pocketId)
    expect(request.request.method).toBe('GET')
  });

  it('updatePocketById api', () => {
    const payload: any = {
      id: 'asdasdsa',
      pocketName: 'test',
      pocketQty: 1,
      totalAmount: 10,
      customer: {
        id: '1231232'
      },
      product: {
        id: '21321321'
      }
    }
    expect(service.updatePocketById(payload)).toBeTruthy();

    service.updatePocketById(payload).subscribe((response: any) => {
      expect(response).toEqual(payload)
    })
    const request = httpMock.expectOne(`http://localhost:8888/pocket`)
    request.flush(payload)
    expect(request.request.method).toBe('PUT')
  });


  it('getProductHistoryPrice api', () => {
    const prodId: string = '213213123'
    expect(service.getProductHistoryPrice(prodId)).toBeTruthy();


  service.getProductHistoryPrice(prodId).subscribe((response: any) => {
    expect(response).toEqual(prodId)
  })
  const request = httpMock.expectOne(`http://localhost:8888/product/${prodId}/history`)
  request.flush(prodId)
  expect(request.request.method).toBe('GET')
  });
});
