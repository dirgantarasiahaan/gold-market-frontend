import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '../../service/products.service';
import { TransactionRoutingModule } from '../transaction/transaction-routing.module';

import { BuyChartComponent } from './buy-chart.component';

describe('BuyChartComponent', () => {
  let component: BuyChartComponent;
  let fixture: ComponentFixture<BuyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyChartComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
