import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../Models/User-Info.model';
import { InfoService } from '../services/info.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(private infoService: InfoService) { }
  user: UserInfo | undefined;
  userProfile: UserInfo[] | null = this.infoService.getInfo();
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
