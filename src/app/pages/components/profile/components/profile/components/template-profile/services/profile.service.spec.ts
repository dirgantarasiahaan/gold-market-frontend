import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule],
      providers: [ProfileService]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getUserById api', () => {
    const customerId: string = '8a68e47278f8d7b30178f8d865960001'
    expect(service.getUserById(customerId)).toBeTruthy();

    service.getUserById(customerId).subscribe((response: any) => {
      expect(response).toEqual(customerId)
    })

    const request = httpMock.expectOne(`http://localhost:8888/customer/${customerId}`)
    request.flush(customerId)
    expect(request.request.method).toBe('GET')
  });

  it('should updateUserById api', () => {
    const customer: any = {
     id: '8a68e47278f8d7b30178f8d865960003',
     firstName: 'test',
     lastName: 'test',
     birthDate: 'test',
     address: 'test',
     username: 'test',
     status: 1,
     password: 'test',
     email: 'test',
     phoneNumber: 'test'
    }
    expect(service.updateUserById(customer)).toBeTruthy();

    service.updateUserById(customer).subscribe((response: any) => {
      expect(response).toEqual(customer)
    })

    const request = httpMock.expectOne('http://localhost:8888/customer')
    request.flush(customer)
    expect(request.request.method).toBe('PUT')
  });
});
