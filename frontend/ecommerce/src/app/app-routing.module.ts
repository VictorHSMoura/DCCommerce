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
import { AvaluationComponent } from './pages/avaluation/avaluation.component';

const routes: Routes = [
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
    path: 'avaluation',
    component: AvaluationComponent
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
