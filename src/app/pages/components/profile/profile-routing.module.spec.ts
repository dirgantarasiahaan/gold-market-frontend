import { HttpClientModule } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MyProfileRoutingModule } from "./components/profile/components/my-profile/my-profile-routing.module";
import { MyProfileComponent } from "./components/profile/components/my-profile/my-profile.component";
import { MyProfileModule } from "./components/profile/components/my-profile/my-profile.module";
import { SettingRoutingModule } from "./components/profile/components/setting/setting-routing.module";
import { SettingModule } from "./components/profile/components/setting/setting.module";
import { ProfileComponent } from "./components/profile/components/template-profile/profile.component";
import { WishlistRoutingModule } from "./components/profile/components/wishlist/wishlist-routing.module";
import { WishlistComponent } from "./components/profile/components/wishlist/wishlist.component";
import { WishlistModule } from "./components/profile/components/wishlist/wishlist.module";
import { Location } from "@angular/common"
describe('Profile', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let component: WishlistComponent

  beforeEach(() => {
  TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([]), MyProfileRoutingModule, SettingRoutingModule,WishlistRoutingModule,
          HttpClientModule,
          MyProfileModule,
          SettingModule,
          WishlistModule
      ],
      declarations: [ MyProfileComponent, WishlistComponent

      ],
      providers: []
  })

  router = TestBed.get(Router);
  location = TestBed.get(Location);

  fixture = TestBed.createComponent(WishlistComponent);
  router.initialNavigation();

  router = TestBed.inject(Router)
  location = TestBed.inject(Location)
  fixture = TestBed.createComponent(WishlistComponent);
  router.initialNavigation();
  component = fixture.componentInstance;



  });

});



