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




  foodList: CalorieCard[] = [
    {
      id: 2,
      name: "Pizza",
      image: "https://img.dominos.vn/cach-lam-pizza-chay-0.jpg",
      calorie: 266,
      description: "Đồ ăn Ý",
      isDish: true
    },
    {
      id: 3,
      name: "Cơm tấm",
      image: "https://images.elipsport.vn/anh-seo-tin-tuc/2020/12/21/com-tam-bao-nhieu-calo-an-nhieu-co-map-khong-1.jpg",
      calorie: 566,
      description: "Đồ ăn Việt",
      isDish: true
    },
  ];
  exerciseList: CalorieCard[] = [
    {
      id: 9,
      name: "Squat",
      image: "https://images.elipsport.vn/news/2020/4/28/huong-dan-cac-bai-tap-squat-tai-nha-cho-nam-mong-to.1588067225.jpg",
      calorie: 15,
      description: "Tốc độ 100 lần/phút",
      isDish: false
    },
    {
      id: 10,
      name: "Yoga",
      image: "https://ggfc.vn/uploads/yoga/tap-yoga-ngoai-30-5.jpg",
      calorie: 300,
      description: "Tập 1 giờ",
      isDish: false
    },
  ];

  // Max calories amount per day
  current_segment_value = 0;

  maxValue: number = 2000;

  constructor(private router: Router, private infoService: InfoService) { }

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
  }

  async slideListChanged() {
    this.current_segment_value = await this.swiperRefList?.nativeElement.swiper.activeIndex;
  }

  async slideChartChanged() {
    this.current_segment_value = await this.swiperRefChart?.nativeElement.swiper.activeIndex;
  }

}
