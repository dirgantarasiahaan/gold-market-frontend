import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HistoryRoutingModule } from './history-routing.module';
import { Location } from "@angular/common"

import { HistoryComponent } from './history.component';
import { TransactionService } from 'src/app/pages/components/products/components/transaction/service/transaction.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let location: Location
  let router: Router
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      imports: [RouterTestingModule.withRoutes([]), HistoryRoutingModule, HttpClientTestingModule],
      providers: [TransactionService]
    })
    .compileComponents();

    router = TestBed.inject(Router)
        location = TestBed.inject(Location)
        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        router.initialNavigation();
        element = fixture.nativeElement.querySelector('h5')
  });

  it('navigate to "" redirect you to /history', fakeAsync(() => {
    router.navigate([""]).then(() => {
        tick(50);
        expect(location.path()).toBe('/')
    })
}))

it('#h5', () => {
  fixture.detectChanges();
  expect(element.textContent).toEqual("")
})

it(`should have as title 'My Transactions`, () => {
  expect(component.title).toEqual('My Transactions');
});

it(`should have as subtitle 'Products`, () => {
  expect(component.subtitle).toEqual('Products');
});

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
