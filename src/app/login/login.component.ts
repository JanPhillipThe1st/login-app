import { Component, Query, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection,CollectionReference } from '@angular/fire/compat/firestore';
import {Observable, map} from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
interface User{
  username: string,
  password:string,
  id:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass','../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class LoginComponent {
  title = "Pagadian Diocesan Schools";
  loggedIn = false;
  username = "";
  password = "";
  usersCollection:AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  logoFile = "../assets/PDS logo.png";
  private afs:AngularFirestore;
  constructor(private router : Router,){}
  public navigateToHome(): void{
    this.router.navigate([""]);
  }
  public setUsername(event:any){
    this.username = event.target.value;
  }
  public setPassword(event:any){
    this.password = event.target.value;
  }
  

  public gotoRegistration(): void{
    this.router.navigate(["teachers"]);
  }
  public async login() {
    if (this.username == "richard123" && this.password == "12345") {
      alert("Login success!");
      this.gotoRegistration();
    }
    else{
      alert("Login failed. Invalid Credentials");
    }
    }
}
