import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';
import { RegusrPage } from '../pages/regusr/regusr';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { MarkersProvider } from '../providers/markers/markers';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyB8jO4yJqg9_kvKMJY4v34Zj6OA0GM1PyY",
  authDomain: "mydo-ad304.firebaseapp.com",
  databaseURL: "https://mydo-ad304.firebaseio.com",
  projectId: "mydo-ad304",
  storageBucket: "mydo-ad304.appspot.com",
  messagingSenderId: "855265169596"
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    HomePage,
    RegistroPage,
    ListPage,
    RegusrPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCqwK2T0YEXe_arPWy9XTm5W6dErtoQojU '}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    HomePage,
    RegistroPage,
    ListPage,
    RegusrPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SQLite,
    Geolocation,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarkersProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
