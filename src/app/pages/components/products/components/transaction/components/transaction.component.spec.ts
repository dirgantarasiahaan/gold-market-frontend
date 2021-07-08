
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionRoutingModule } from '../transaction-routing.module';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
  let element: HTMLElement;
  let element2: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule.forRoot([]),
      RouterTestingModule.withRoutes([]), TransactionRoutingModule
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h5')
    element2 = fixture.nativeElement.querySelector('p')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#h5', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Detail Transaction")
  })

  it('#p', () => {
    fixture.detectChanges();
    expect(element2.textContent).toEqual(" Pocket : Select Pockets")
  })

});


