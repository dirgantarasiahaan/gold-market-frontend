import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getUserById api', () => {
    const customerId: string = '8a68e47278f8d7b30178f8d865960001'
    expect(service.getUserById(customerId)).toBeTruthy();
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
  });
});
