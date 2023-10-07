import { Component, OnInit } from '@angular/core';
import {
  Exercise,
  Categories,
  ExerciseCategory,
} from '../Models/exercise-category';
import { ActivatedRoute } from '@angular/router';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  selectedCategory!: ExerciseCategory;
  selectedExercise!: Exercise;
  count: number = 0;

  constructor(
    private route: ActivatedRoute,
    private countService: CountService
  ) {}

  HanddleCount(parentId: number, exerciseId: number) {
    this.count = this.countService.getCount(parentId, exerciseId);

    // Tăng giá trị count lên 1
    this.count = this.countService.increaseCount(parentId, exerciseId);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryIdParam = params.get('parentId');
      const exerciseIdParam = params.get('id');

      if (categoryIdParam !== null && exerciseIdParam !== null) {
        const categoryId = +categoryIdParam;
        const exerciseId = +exerciseIdParam;

        this.selectedCategory = Categories.find((e) => e.id === categoryId)!;

        // Kiểm tra danh mục có tồn tại không
        if (!this.selectedCategory) {
          console.error('Không tìm thấy danh mục với ID được cung cấp.');
          return;
        }

        this.selectedExercise = this.selectedCategory.exercises.find(
          (e) => e.id === exerciseId
        )!;

        // Kiểm tra bài tập có tồn tại không
        if (!this.selectedExercise) {
          console.error('Không tìm thấy bài tập với ID được cung cấp.');
          return;
        }
        // xử lý count
        this.HanddleCount(categoryId, exerciseId);
      } else {
        console.error('ID không hợp lệ.');
      }
    });
  }
}
