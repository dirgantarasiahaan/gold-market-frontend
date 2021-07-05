import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addpocket api', () => {
    const payload: any = {
      id: 'asdasdsa',
      pocketName: 'test',
      pocketQty: 1,
      totalAmount: 10,
      customer: {
        id: '1231232'
      },
      product: {
        id: '21321321'
      }
    }
    expect(service.addPocket(payload)).toBeTruthy();
  });

  it('getPocketByCustIdProdId api', () => {
    const custId: string = '21312312'
    const prodId: string = '213213123'
    expect(service.getPocketByCustIdProdId(custId, prodId)).toBeTruthy();
  });

  it('getProductsByCustomerId api', () => {
    const custId: string = '21312312'
    expect(service.getProductsByCustomerId(custId)).toBeTruthy();
  });

  it('delete api', () => {
    const pocketId: string = '21312312'
    expect(service.deletePocket(pocketId)).toBeTruthy();
  });

  it('getPocketById api', () => {
    const pocketId: string = '21312312'
    expect(service.getPocketById(pocketId)).toBeTruthy();
  });

  it('updatePocketById api', () => {
    const payload: any = {
      id: 'asdasdsa',
      pocketName: 'test',
      pocketQty: 1,
      totalAmount: 10,
      customer: {
        id: '1231232'
      },
      product: {
        id: '21321321'
      }
    }
    expect(service.updatePocketById(payload)).toBeTruthy();
  });


  it('getProductHistoryPrice api', () => {
    const prodId: string = '213213123'
    expect(service.getProductHistoryPrice(prodId)).toBeTruthy();
  });

});
