import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {
  name: string = 'Nguyễn Văn A';
  gender: string = 'male';
  height: number = 1.73;
  weight: number = 76;

  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    if (this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/home');
    }
  }

  btnSubmit() {
    this.addBMIInfo();
  }
  validator(): boolean {
    if (!this.name) {
      alert('Vui lòng nhập tên!');
      return false;
    }
    if (!this.height || !this.weight) {
      alert('Vui lòng nhập cả chiều cao và cân nặng!');
      return false;
    }
    if (!this.gender) {
      alert('Vui lòng chọn giới tính!');
      return false;
    }
    if (this.height > 250) {
      alert('Chiều cao hợp lệ tối đa 250 cm');
      return false;
    }
    if (this.weight > 200) {
      alert('Cân nặng hợp lệ tối đa 200 kg');
      return false;
    }
    return true;
  }
  addBMIInfo() {
    if (this.validator()) {
      this.infoService.saveInfo(
        this.name,
        this.gender,
        this.height,
        this.weight
      );
      this.router.navigateByUrl('/loading');
    }
  }
}
