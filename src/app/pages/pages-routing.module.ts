import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../shared/guards/route.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    children: [
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () => import('./components/home/home.module')
            .then((m) => m.HomeModule)
        },
        {
          path: 'products',
          loadChildren: () => import('./components/products/products.module')
            .then((m) => m.ProductsModule),
        },
        {
          path: 'profile',
          loadChildren: () => import('./components/profile/profile.module')
            .then((m) => m.ProfileModule),
        }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
