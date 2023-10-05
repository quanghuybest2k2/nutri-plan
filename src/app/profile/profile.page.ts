import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { UserInfo } from '../Models/User-Info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo: UserInfo = {
    name: '',
    gender: '',
    height: 0,
    weight: 0,
  };

  constructor(private infoService: InfoService, private router: Router) {}

  ngOnInit() {
    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/bmi');
    }
  }

  ionViewWillEnter() {
    const userInfos = this.infoService.getInfo();
    if (userInfos && userInfos.length > 0) {
      this.userInfo = userInfos[0];
    }
  }

  checkBMI(): boolean {
    return this.infoService.isProvidedBMI();
  }

  btnEditSubmit() {
    this.infoService.editInfo(
      this.userInfo.name,
      this.userInfo.gender,
      this.userInfo.height,
      this.userInfo.weight
    );
  }
}
