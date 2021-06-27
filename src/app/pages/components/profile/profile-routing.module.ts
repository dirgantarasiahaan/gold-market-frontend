import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/components/template-profile/profile.component';

const routes: Routes = [
  {
      path: '',
      component: ProfileComponent,
      children: [
          {
              path: '',
              loadChildren: () => import('./components/profile/components/my-profile/my-profile.module')
              .then((m) => m.MyProfileModule)
          },
          {
              path: 'wishlists',
              loadChildren: () => import('./components/profile/components/wishlist/wishlist.module')
                  .then((m) => m.WishlistModule)
          },
          {
              path: 'setting',
              loadChildren: () => import('./components/profile/components/setting/setting.module')
              .then((m) => m.SettingModule)
          },
          {
              path: 'histories',
              loadChildren: () => import('./components/profile/components/history/history.module')
                  .then((m) => m.HistoryModule)
          },
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
