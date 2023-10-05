import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(private infoService: InfoService) { }
  user: {
    name: string;
    gender: string;
    height: number;
    weight: number;
  } | undefined;
  userProfile: [{
    name: string;
    gender: string;
    height: number;
    weight: number;
  }] | null = this.infoService.getInfo();
  ngOnInit() {
    if (this.userProfile !== null) {
      this.user = this.userProfile[0]
    }
  }
  showInfo() {
    if (typeof (this.user) !== "undefined") {
      console.log(this.user.name);
    }
  }
}
