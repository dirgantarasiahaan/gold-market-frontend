import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from, Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileService } from '../template-profile/services/profile.service';

import { MyProfileComponent } from './my-profile.component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;
  let element: HTMLElement;
  let profileService: ProfileService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileComponent ],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [ProfileService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h6')
    fixture.detectChanges();
    profileService = TestBed.inject(ProfileService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Profile'`, () => {
    expect(component.title).toEqual('My Profile');
  });

  it('should display My Profile', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Full Name")
  })

  it('#function getUserById', () => {
    const response = {
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
              "id": "4028e4907912fcd6017912ff68440001",
              "pocketName": "tabungan hari tua",
              "totalAmount": null,
              "pocketQty": 97.0,
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
                  "productName": "Gold",
                  "productPriceBuy": 300,
                  "productPriceSell": 350,
                  "productImage": "../../../../../../assets/2.png",
                  "productStatus": 1,
                  "historyPrice": [
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
                  ],
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
              }
          },
          {
              "id": "4028e4907a7e9682017a7e9dba960000",
              "pocketName": "pocket 4",
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
                  "productName": "Gold",
                  "productPriceBuy": 300,
                  "productPriceSell": 350,
                  "productImage": "../../../../../../assets/2.png",
                  "productStatus": 1,
                  "historyPrice": [
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
                  ],
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
              }
          },
          {
              "id": "4028e4907912fcd601791307ba250006",
              "pocketName": "Pensiun",
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
                  "productName": "Gold",
                  "productPriceBuy": 300,
                  "productPriceSell": 350,
                  "productImage": "../../../../../../assets/2.png",
                  "productStatus": 1,
                  "historyPrice": [
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
                  ],
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
              }
          },
          {
              "id": "4028e4907912fcd601791307c9840007",
              "pocketName": "Tabungan",
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
                  "productName": "Gold",
                  "productPriceBuy": 300,
                  "productPriceSell": 350,
                  "productImage": "../../../../../../assets/2.png",
                  "productStatus": 1,
                  "historyPrice": [
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
                  ],
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
              }
          },
          {
              "id": "4028e4907912fcd601791307d9910008",
              "pocketName": "Beli Rumah",
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
                  "productName": "Gold",
                  "productPriceBuy": 300,
                  "productPriceSell": 350,
                  "productImage": "../../../../../../assets/2.png",
                  "productStatus": 1,
                  "historyPrice": [
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
                  ],
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-04-22T17:00:00.000+00:00"
              }
          }
      ]
  }
    const customerId: string = '8a68e47278f8d7b30178f8d865960001'
    const spy = spyOn(profileService, 'getUserById').and.callFake((customerId): Observable<any> => {
      return from([response])
    })
    component.getUser()
    expect(spy).toHaveBeenCalled()

  });
});
