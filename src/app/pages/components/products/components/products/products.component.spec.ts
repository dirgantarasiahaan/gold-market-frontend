import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsRoutingModule } from '../../products-routing.module';
import { Location } from "@angular/common"

import { ProductsComponent } from './products.component';
import { ProductsService } from '../../service/products.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let location: Location
  let router: Router
  let element: HTMLElement;
  let element2: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [RouterTestingModule.withRoutes([]), ProductsRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule, FormsModule],
      providers: [ProductsService]
    }).compileComponents();

    router = TestBed.inject(Router)

    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    element = fixture.nativeElement.querySelector('h6')
    element2 = fixture.nativeElement.querySelector('button')


  });

  it('navigate to "" redirect you to /products', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })

}))

  it('#H6', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Buy Price")
  })

  it('#button', () => {
    fixture.detectChanges();
    expect(element2.textContent).toEqual("Add Pocket")
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function addPocket', () => {
    expect(component.addPocket).toBeUndefined;
  });

  it('= chartBuy', () => {
    expect(component.chartBuy).toEqual('btn btn-primary')
    expect(component.chartSell).toEqual('btn btn-light')
    expect(component.buy).toEqual('active')
  });

  it('submiting  a form emits a username', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['pocketName'].setValue('dirgaaa')
    component.form.controls['pocketQty'].setValue('dirgaaa')
    component.form.controls['totalAmount'].setValue('dirgaaa')
    expect(component.form.valid).toBeTrue();
  })

  it('submiting  changeactive', () => {
    const value: string = 'buy'
    component.changeActive(value)
    expect(component.buy).toEqual('active');
    const value2 : string = 'sell'
    component.changeActive(value2)
    expect(component.sell).toEqual('active');
    const value3: string = 'error'
    expect(component.changeActive(value3)).toBeUndefined()
  })

  it('submiting  changechart', () => {
    expect(component.chartBuy).toEqual('btn btn-primary');
    expect(component.chartSell).toEqual('btn btn-light');
    const value: string = 'buy'
    component.changeChart(value)
    expect(component.chartBuy).toEqual('btn btn-primary');
    expect(component.chartSell).toEqual('btn btn-light');
    const value2 : string = 'sell'
    component.changeChart(value2)
    expect(component.chartSell).toEqual('btn btn-primary');
    expect(component.chartBuy).toEqual('btn btn-light');
  })
});
