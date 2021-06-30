import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyChartComponent } from './buy-chart.component';

describe('BuyChartComponent', () => {
  let component: BuyChartComponent;
  let fixture: ComponentFixture<BuyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyChartComponent ]
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
