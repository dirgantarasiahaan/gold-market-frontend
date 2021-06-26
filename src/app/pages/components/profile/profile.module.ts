import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { HistoryComponent } from './components/history/history.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent,
    HistoryComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule  
  ],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
