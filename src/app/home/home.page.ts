import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';
import {
  Exercise,
  ExerciseCategory,
  Categories,
} from '../Models/exercise-category';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private infoService: InfoService) {}

  baiViet: any[] = [
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
    {
      id: 1,
      name: 'Nên uống bao nhiêu nước 1 ngày',
      category: 'Calories/ngày',
      imageUrl: 'assets/NB1.png',
    },
  ];

  dinhDuong: any[] = [
    {
      id: 1,
      name: 'Cơm rau củ',
      describe: '1500 calories',
      imageUrl: 'assets/nutri/food.png',
    },
    {
      id: 1,
      name: 'Mỳ ý sốt kem',
      describe: '2000 calories',
      imageUrl: 'assets/nutri/food1.png',
    },
    {
      id: 1,
      name: 'Pudding dâu',
      describe: '200 calories',
      imageUrl: 'assets/nutri/food2.png',
    },
    {
      id: 1,
      name: 'Mỳ xào nấm',
      describe: '520 calories',
      imageUrl: 'assets/nutri/food1.png',
    },
    {
      id: 1,
      name: 'Nước ép táo',
      describe: '300 calories',
      imageUrl: 'assets/nutri/food4.png',
    },
  ];

  listExercises: ExerciseCategory[] = Categories;

  ngOnInit() {
    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/intro');
    }
  }
}
