import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass','../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class LoginComponent {
  
  title = "Pagadian Diocesan Schools";
  logoFile = "../assets/PDS logo.png";
  constructor(private router : Router){}
  public navigateToHome(): void{
    this.router.navigate([""]);
  }
}
