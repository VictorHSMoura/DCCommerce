import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoggedGuard } from './guards/logged/logged.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { ProductComponent } from './pages/product/product.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UnloggedGuard } from './guards/unlogged/unlogged.guard';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [UnloggedGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [UnloggedGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register-product',
    component: RegisterProductComponent,
    canActivate: [UnloggedGuard],
  },
  {
    path: 'product',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'search',
    component: HomeComponent
  },
  {
    path: 'search/:q',
    component: SearchComponent
  },
  {
    path: 'evaluation',
    component: EvaluationComponent,
    canActivate: [UnloggedGuard],
  },
  {
    path: 'evaluation/:id',
    component: EvaluationComponent,
    canActivate: [UnloggedGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UnloggedGuard],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

