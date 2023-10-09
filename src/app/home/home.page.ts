import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';
import {
  Exercise,
  ExerciseCategory,
  Categories,
} from '../Models/exercise-category';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listExercise: ExerciseCategory[] = Categories;
  topExercises: Exercise[] = [];

  constructor(
    private router: Router,
    private infoService: InfoService,
    private countService: CountService
  ) {}

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
    this.getExercisePopular();
  }
  getExercisePopular() {
    const countsArray = this.countService.getCounts() ?? [];

    // Sắp xếp mảng counts theo số lượng count giảm dần
    countsArray.sort((a, b) => b.count - a.count);

    // Lấy danh sách các bài tập có số lượng count lớn nhất từ Categories
    this.topExercises = countsArray
      .map((item) => {
        // Tìm bài tập từ Categories theo parentId và exerciseId
        const category = Categories.find((cat) => cat.id === item.parentId);
        if (category) {
          // Tìm bài tập từ exercises theo exerciseId
          const exercise = category.exercises.find(
            (ex) => ex.id === item.exerciseId
          );
          if (exercise) {
            // Trả về một bản sao của bài tập với số lượng count được cập nhật
            return { ...exercise, count: item.count };
          }
        }
        return null;
      })
      // Lọc bỏ các bài tập không tìm thấy hoặc không hợp lý
      .filter((item) => item !== null) as Exercise[];
  }
}
