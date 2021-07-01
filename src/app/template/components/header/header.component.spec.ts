import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, getTestBed, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from 'src/app/pages/components/products/service/products.service';
import { NavbarDirective } from 'src/app/shared/directives/navbar/navbar.directive';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let injector: TestBed;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: ProductsService;
  let httpMock: HttpTestingController;
  let appNavbar: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, NavbarDirective ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      providers: [ProductsService]
    })
    .createComponent(HeaderComponent);

    fixture = TestBed.createComponent(HeaderComponent);
    injector = getTestBed()
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
    appNavbar = fixture.debugElement.query(By.directive(NavbarDirective))
    component = fixture.componentInstance;
  });


  it('should element appNavbar', () => {
    expect(appNavbar).toBeTruthy()
  });

  it('should be created', inject([ProductsService],
    (service: ProductsService) => {
      expect(service).toBeTruthy();
    }))

    describe('#getProducts', () => {
      it('should be observable', () => {
        const customerId = '8a68e47278f8d7b30178f8d865960001'

        service.getProductsByCustomerId(customerId).subscribe((response: any) => {
            expect(response).toBeTruthy()
        })

        const request = httpMock.expectOne(`http://localhost:8888/customer/${customerId}/products`)
        expect(request.request.method).toBe('GET')

      })
    })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
