import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileService } from '../template-profile/services/profile.service';

import { MyProfileComponent } from './my-profile.component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileComponent ],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [ProfileService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h6')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Profile'`, () => {
    expect(component.title).toEqual('My Profile');
  });

  it('should display My Profile', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual("Full Name")
  })
});
