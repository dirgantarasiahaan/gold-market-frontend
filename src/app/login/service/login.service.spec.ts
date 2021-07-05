import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const mock:any = {
      "id": "8a68e47278f8d7b30178f8d865960001",
      "token": "$qwertyasdfghzxcvbnb"
  }

    const credentials:any =  { username: 'dirga', password: 'password'}
    expect(service.login(credentials)).toBeDefined()
  });
});
