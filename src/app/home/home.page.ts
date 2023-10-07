import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  value: number = 500;
  // giá trị tối đa hiển thị calo tối đa
  maxValue: number = 2000;

  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/bmi');
    }
  }
  calculateProgress(value: number): number {
    return Math.min((value / this.maxValue) * 100, 100);
  }
  calculateDashArray(value: number): string {
    const circumference = 2 * Math.PI * 40;
    const progress = (value / this.maxValue) * circumference;
    const dashArray = `${progress} ${circumference}`;
    return dashArray;
  }
}
