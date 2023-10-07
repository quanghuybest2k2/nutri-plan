import { Component, OnInit } from '@angular/core';
import {
  Exercise,
  Categories,
  ExerciseCategory,
} from '../Models/exercise-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  selectedCategory!: ExerciseCategory;
  selectedExercise!: Exercise;

  constructor(private route: ActivatedRoute) {}

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
      } else {
        console.error('ID không hợp lệ.');
      }
    });
  }
}
