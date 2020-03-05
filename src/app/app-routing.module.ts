import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './auth/login/login.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: '',  component: LoginComponent }, 
  { path: 'login',  component: LoginComponent },
  //{ path: 'login',component: LoginComponent}, 
  //{ path: 'accounts',component: AccountsComponent},
  { path: 'accounts', canActivate:[AuthGuard] , loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }, 
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
