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
import { ShoppingHistoryComponent } from './pages/shopping-history/shopping-history.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register-product',
    component: RegisterProductComponent,
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
    path: 'evaluation',
    component: EvaluationComponent
  },
  {
    path: 'history',
    component: ShoppingHistoryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

