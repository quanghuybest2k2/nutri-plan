import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {
  gender: string = '';
  height: number = 0;
  weight: number = 0;
  constructor() {}

  ngOnInit() {}

  btnSubmit() {
    alert(
      `Chiều cao: ${this.height}, Cân nặng: ${this.weight}, giới tính: ${this.gender}`
    );
  }
}
