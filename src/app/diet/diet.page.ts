import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalorieCard, CalorieCardsList } from '../Models/calories';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage implements OnInit {
  @ViewChild('swiper_chart')
  swiperRefChart: ElementRef | undefined;

  @ViewChild('swiper_list')
  swiperRefList: ElementRef | undefined;

  caloriesList: CalorieCard[] = CalorieCardsList

  // Max calories amount per day
  current_segment_value = 0;

  maxValue: number = 2000;

  constructor(private router: Router, private infoService: InfoService) { }

  ngOnInit() {

    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/bmi')
    }
  }

  async segmentChanged(ev: any) {
    await this.swiperRefChart?.nativeElement.swiper.slideTo(this.current_segment_value);
    await this.swiperRefList?.nativeElement.swiper.slideTo(this.current_segment_value);
  }


  async slideListChanged() {
    this.current_segment_value = await this.swiperRefList?.nativeElement.swiper.activeIndex;
  }

  async slideChartChanged() {
    this.current_segment_value = await this.swiperRefChart?.nativeElement.swiper.activeIndex;
  }

}
