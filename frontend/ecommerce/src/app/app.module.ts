import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FontAwesomeModule } from 'font-awesome/';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faGithub, faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Pages
import { RegisterModule } from './pages/register/register.module';
import { LoginModule } from './pages/login/login.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

// Translate
import pt from '@angular/common/locales/pt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { registerLocaleData } from '@angular/common';
registerLocaleData(pt);

// Ngrx
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { effects } from './stores/effects';
import { reducers } from './stores/reducers';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';
import { ComponentsModule } from './components/components.module';
import { CartModule } from './pages/cart/cart.module';
import { HomeModule } from './pages/home/home.module';
import { RegisterProductModule } from './pages/register-product/register-product.module';
import { ProductComponent } from './pages/product/product.component';
import { AvaluationModule } from './pages/avaluation/avaluation.module';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      { auth: ['loggedUser'] },
    ],
    rehydrate: true,
  })(reducer);
}
// tslint:disable-next-line: prefer-array-literal
const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // FontAwesomeModule,
    // AngularFontAwesomeModule,
    RegisterModule,
    ToasterModule.forRoot(),
    LoginModule,
    DashboardModule,
    ComponentsModule,
    ForgotPasswordModule,
    CartModule,
    HomeModule,
    RegisterProductModule,
    AvaluationModule,
  ],
  providers: [
    Storage,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // library.add(faGithub, faFacebook, faTwitter, faGoogle, faLinkedin);
  }
}
