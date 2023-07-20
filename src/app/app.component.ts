import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass','../../node_modules/bootstrap/scss/bootstrap.scss',]
})
export class AppComponent {
  title = "Pagadian Diocesan Schools";
  logoFile = "../assets/PDS logo.png";
  constructor(private router : Router){}

  public gotoRegistration(): void{
    this.router.navigate(["registration"]);
  }

}
