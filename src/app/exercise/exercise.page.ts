import { Component, OnInit } from '@angular/core';
import {
  Categories,
  Exercise,
  ExerciseCategory,
} from '../Models/exercise-category';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  colors: string[] = ['#f6cc38', '#558ec5', '#ee9cd2', '#ffffff'];
  listExercise: ExerciseCategory[] = Categories;
  topExercises: Exercise[] = [];
  exercises!: Exercise[];

  constructor(private countService: CountService) {}

  ngOnInit() {
    if (this.countService.getTotalCount() < 4) {
      this.exercises = this.getAllExercises();
    } else {
      this.exercises = this.getExercisePopular();
    }
  }
  getExercisePopular(): Exercise[] {
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
    return this.topExercises;
  }
  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
  // lấy tất cả bài tập nếu chưa có đủ 4 bài tập phổ biến
  getAllExercises(): Exercise[] {
    let allExercises: Exercise[] = [];
    Categories.forEach((category) => {
      allExercises = [...allExercises, ...category.exercises];
    });
    return allExercises;
  }
}
