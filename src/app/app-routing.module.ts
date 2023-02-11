import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/public/home/home.module').then((t) => t.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/public/auth/auth.module').then((t) => t.AuthModule),
  }
  ,
  {
    path: '**',component:Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
