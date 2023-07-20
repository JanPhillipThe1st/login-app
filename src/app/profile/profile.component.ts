import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
name = "Richard P. Cañete Jr.";
age = "22";
address = "Olutanga, Zamboanga Sibugay"
profilePhoto= "../assets/profile.png";

}
