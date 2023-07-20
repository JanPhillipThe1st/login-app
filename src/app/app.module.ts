import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ProfileComponent } from './profile/profile.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCqTPW7GsylqCzwEUa1qwhWmo49_D7-Qyw",
      authDomain: "pagadian-diocesan-schools-scc.firebaseapp.com",
      projectId: "pagadian-diocesan-schools-scc",
      storageBucket: "pagadian-diocesan-schools-scc.appspot.com",
      messagingSenderId: "408770184985",
      appId: "1:408770184985:web:ca7432337edcb85bff6788",
      measurementId: "G-1YK8102S9B"
     })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
