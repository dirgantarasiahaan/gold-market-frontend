import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [TransactionService]
    });

    injector = getTestBed()
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', inject([TransactionService],
    (service: TransactionService) => {
      expect(service).toBeTruthy();
    }))


    describe('#purchase', () => {
      it('should be observable', () => {
        const custId = '4028e4907a5c1183017a5c1311880001'
        const mock : any = {
          "id": "4028e4907a62759f017a62c1269e0000",
          "purchaseDate": "2021-07-01T15:47:43.304+00:00",
          "purchaseType": 1,
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
              "phoneNumber": "0899999",
              "pockets": [
                  {
                      "id": "4028e4907a5c1183017a5c14de530004",
                      "pocketName": "testing product",
                      "totalAmount": null,
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
                          "productName": "tabanas",
                          "productPriceBuy": 100,
                          "productPriceSell": 200,
                          "productImage": "https://img.lovepik.com/element/40141/3943.png_300.png",
                          "productStatus": 1,
                          "historyPrice": [],
                          "createdAt": "2021-04-21T17:00:00.000+00:00",
                          "updatedAt": "2021-04-21T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907912fcd6017912ff68440001",
                      "pocketName": "tabungan hari tua",
                      "totalAmount": null,
                      "pocketQty": 98.0,
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
                          "id": "8a68e47278fdeeed0178fdf13eef0002",
                          "productName": "Tabungan Pensiun",
                          "productPriceBuy": 300,
                          "productPriceSell": 350,
                          "productImage": "baru baru",
                          "productStatus": 1,
                          "historyPrice": [
                              {
                                  "id": "8a68e47278fdeeed0178fdf13ef10003",
                                  "historyDate": "2021-04-23T08:55:49.230+00:00",
                                  "priceBuy": 300,
                                  "priceSell": 350,
                                  "product": {
                                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
                                      "productStatus": 1,
                                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                                  }
                              }
                          ],
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907912fcd601791307d9910008",
                      "pocketName": "platinum",
                      "totalAmount": null,
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
                          "id": "8a68e47278fdeeed0178fdf13eef0002",
                          "productName": "Tabungan Pensiun",
                          "productPriceBuy": 300,
                          "productPriceSell": 350,
                          "productImage": "baru baru",
                          "productStatus": 1,
                          "historyPrice": [
                              {
                                  "id": "8a68e47278fdeeed0178fdf13ef10003",
                                  "historyDate": "2021-04-23T08:55:49.230+00:00",
                                  "priceBuy": 300,
                                  "priceSell": 350,
                                  "product": {
                                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
                                      "productStatus": 1,
                                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                                  }
                              }
                          ],
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907912fcd601791307c9840007",
                      "pocketName": "silver",
                      "totalAmount": null,
                      "pocketQty": 70.0,
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
                          "id": "8a68e47278fdeeed0178fdf13eef0002",
                          "productName": "Tabungan Pensiun",
                          "productPriceBuy": 300,
                          "productPriceSell": 350,
                          "productImage": "baru baru",
                          "productStatus": 1,
                          "historyPrice": [
                              {
                                  "id": "8a68e47278fdeeed0178fdf13ef10003",
                                  "historyDate": "2021-04-23T08:55:49.230+00:00",
                                  "priceBuy": 300,
                                  "priceSell": 350,
                                  "product": {
                                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
                                      "productStatus": 1,
                                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                                  }
                              }
                          ],
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907912fcd601791307ba250006",
                      "pocketName": "gold",
                      "totalAmount": null,
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
                          "id": "8a68e47278fdeeed0178fdf13eef0002",
                          "productName": "Tabungan Pensiun",
                          "productPriceBuy": 300,
                          "productPriceSell": 350,
                          "productImage": "baru baru",
                          "productStatus": 1,
                          "historyPrice": [
                              {
                                  "id": "8a68e47278fdeeed0178fdf13ef10003",
                                  "historyDate": "2021-04-23T08:55:49.230+00:00",
                                  "priceBuy": 300,
                                  "priceSell": 350,
                                  "product": {
                                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
                                      "productStatus": 1,
                                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                                  }
                              }
                          ],
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907a50574c017a538e5c240008",
                      "pocketName": "tets4444",
                      "totalAmount": null,
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
                          "id": "8a68e47278fdeeed0178fdf13eef0002",
                          "productName": "Tabungan Pensiun",
                          "productPriceBuy": 300,
                          "productPriceSell": 350,
                          "productImage": "baru baru",
                          "productStatus": 1,
                          "historyPrice": [
                              {
                                  "id": "8a68e47278fdeeed0178fdf13ef10003",
                                  "historyDate": "2021-04-23T08:55:49.230+00:00",
                                  "priceBuy": 300,
                                  "priceSell": 350,
                                  "product": {
                                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
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
                                      "productName": "Tabungan Pensiun",
                                      "productPriceBuy": 300,
                                      "productPriceSell": 350,
                                      "productImage": "baru baru",
                                      "productStatus": 1,
                                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                                  }
                              }
                          ],
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      }
                  },
                  {
                      "id": "4028e4907a5e819a017a5e8b88b30001",
                      "pocketName": "pocket 3 ",
                      "totalAmount": null,
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
                          "productName": "tabanas",
                          "productPriceBuy": 100,
                          "productPriceSell": 200,
                          "productImage": "https://img.lovepik.com/element/40141/3943.png_300.png",
                          "productStatus": 1,
                          "historyPrice": [],
                          "createdAt": "2021-04-21T17:00:00.000+00:00",
                          "updatedAt": "2021-04-21T17:00:00.000+00:00"
                      }
                  }
              ]
          },
          "purchaseDetails": [
              {
                  "id": "4028e4907a62759f017a62c126a40001",
                  "price": 300,
                  "quantityInGram": 1.0,
                  "product": {
                      "id": "8a68e47278fdeeed0178fdf13eef0002",
                      "productName": "Tabungan Pensiun",
                      "productPriceBuy": 300,
                      "productPriceSell": 350,
                      "productImage": "baru baru",
                      "productStatus": 1,
                      "historyPrice": [
                          {
                              "id": "8a68e47278fdeeed0178fdf13ef10003",
                              "historyDate": "2021-04-23T08:55:49.230+00:00",
                              "priceBuy": 300,
                              "priceSell": 350,
                              "product": {
                                  "id": "8a68e47278fdeeed0178fdf13eef0002",
                                  "productName": "Tabungan Pensiun",
                                  "productPriceBuy": 300,
                                  "productPriceSell": 350,
                                  "productImage": "baru baru",
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
                                  "productName": "Tabungan Pensiun",
                                  "productPriceBuy": 300,
                                  "productPriceSell": 350,
                                  "productImage": "baru baru",
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
                                  "productName": "Tabungan Pensiun",
                                  "productPriceBuy": 300,
                                  "productPriceSell": 350,
                                  "productImage": "baru baru",
                                  "productStatus": 1,
                                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
                              }
                          }
                      ],
                      "createdAt": "2021-04-22T17:00:00.000+00:00",
                      "updatedAt": "2021-04-22T17:00:00.000+00:00"
                  },
                  "pocket": {
                      "id": "4028e4907912fcd6017912ff68440001",
                      "pocketName": null,
                      "totalAmount": null,
                      "pocketQty": null,
                      "customer": null,
                      "product": null
                  }
              }
          ]
      }

        service.purchase(custId, mock).subscribe((response:any) => {
          expect(response).toBeTruthy()
        })

        const request = httpMock.expectOne(`http://localhost:8888/customer/${custId}/purchases`, mock)
        request.flush(mock);
        expect(request.request.method).toBe('POST')

      })
    })




});
