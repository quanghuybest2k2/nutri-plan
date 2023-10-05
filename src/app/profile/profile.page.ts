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
  validator(): boolean {
    if (!this.userInfo.gender) {
      alert('Vui lòng nhập tên!');
      return false;
    }
    if (!this.userInfo.height || !this.userInfo.weight) {
      alert('Vui lòng nhập cả chiều cao và cân nặng!');
      return false;
    }
    if (!this.userInfo.gender) {
      alert('Vui lòng chọn giới tính!');
      return false;
    }
    if (this.userInfo.height > 250) {
      alert('Chiều cao hợp lệ tối đa 250 cm');
      return false;
    }
    if (this.userInfo.weight > 200) {
      alert('Cân nặng hợp lệ tối đa 200 kg');
      return false;
    }
    if (this.userInfo.gender !== 'male' && this.userInfo.gender !== 'female' && this.userInfo.gender !== 'other') {
      alert('Chỉ cho phép nhập male hoặc female');
      return false;
    }

    return true;
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
    if (this.validator()) {
      this.infoService.editInfo(
        this.userInfo.name,
        this.userInfo.gender,
        this.userInfo.height,
        this.userInfo.weight
      );
    }
  }
}
