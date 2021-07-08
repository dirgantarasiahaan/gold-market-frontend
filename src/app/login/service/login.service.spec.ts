import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const mock:any = {
      'username': 'dirga',
      'password': 'password'
  }

  service.login(mock).subscribe((response: any) => {
    expect(response).toEqual(mock)
  })

  const request = httpMock.expectOne('http://localhost:8888/login')
  request.flush(mock)
  expect(request.request.method).toBe('POST')

    const credentials:any =  { username: 'dirga', password: 'password'}
    expect(service.login(credentials)).toBeDefined()
    expect(service.login(credentials)).toBeTruthy()
  });
});
