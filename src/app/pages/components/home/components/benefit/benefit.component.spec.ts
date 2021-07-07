import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitComponent } from './benefit.component';

describe('BenefitComponent', () => {
  let component: BenefitComponent;
  let fixture: ComponentFixture<BenefitComponent>;
  let element: HTMLElement;
  let h3: HTMLElement;
  let h5: HTMLElement;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('h3')
    h3 = fixture.nativeElement.querySelector('h3')
    h5 = fixture.nativeElement.querySelector('h5')
    p = fixture.nativeElement.querySelector('p')

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Why Mandiri Gold ?")
  })

  it('should display h5', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Why Mandiri Gold ?")
  })

  it('should display p', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("We have free delivery service to all city in indonesia.")
  })
});
