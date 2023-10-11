import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';
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
  @ViewChild('segment_button') segComponent: IonSegment | undefined;
  @ViewChild('swiper_list')
  swiperRefList: ElementRef | undefined;

  caloriesList: CalorieCard[] = CalorieCardsList




  foodList: CalorieCard[] = [];
  exerciseList: CalorieCard[] = [];

  // Max calories amount per day
  current_segment_value = 0;

  maxValue: number = 2000;

  constructor(private router: Router, private infoService: InfoService) {

  }

  ngOnInit() {

    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/bmi')
    }
  }



  removeFood(index: number) {
    if (index > -1)
      this.foodList.splice(index, 1);

  }

  removeExercise(index: number) {
    if (index > -1)
      this.exerciseList.splice(index, 1);
  }

  remove(item: CalorieCard) {
    if (item.isDish) {
      this.removeFood(this.foodList.indexOf(item))
    } else {
      this.removeExercise(this.exerciseList.indexOf(item));
    }
  }

  add(item: CalorieCard) {
    if (item.isDish)
      this.foodList.push(item)
    else
      this.exerciseList.push(item)
  }





  getChargedCalorie() {
    let sum = 0;
    for (let item of this.foodList) {
      sum += item.calorie;
    }
    return sum;
  }

  getBurnedCalorie() {
    let sum = 0;
    for (let item of this.exerciseList) {
      sum += item.calorie;
    }
    return sum;
  }

  async segmentChanged(ev: any) {


    await this.swiperRefChart?.nativeElement.swiper.slideTo(this.current_segment_value);
    await this.swiperRefList?.nativeElement.swiper.slideTo(this.current_segment_value);
    if (this.segComponent != undefined) {

      this.segComponent.value = this.current_segment_value;
      console.log(this.segComponent.value)
    }


  }

  async slideListChanged() {
    this.current_segment_value = this.swiperRefList?.nativeElement.swiper.activeIndex;
  }

  async slideChartChanged() {
    this.current_segment_value = await this.swiperRefChart?.nativeElement.swiper.activeIndex;
  }

}
