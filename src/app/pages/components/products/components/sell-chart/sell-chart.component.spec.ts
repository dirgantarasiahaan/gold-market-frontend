import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ProductsService } from '../../service/products.service';

import { SellChartComponent } from './sell-chart.component';

describe('SellChartComponent', () => {
  let component: SellChartComponent;
  let fixture: ComponentFixture<SellChartComponent>;
  let service: ProductsService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellChartComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    })
    .compileComponents();

    injector = getTestBed()
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('#getUsers', () => {
    const productId = '8a68e47278fdeeed0178fdf13eef0002'
    it('should be observable', () => {
      service.getProductHistoryPrice(productId).subscribe((response: any) => {
          expect(response).toBeTruthy()
      })
      const request = httpMock.expectOne(`http://localhost:8888/product/${productId}/history`)
      expect(request.request.method).toBe('GET')

    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SellChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
