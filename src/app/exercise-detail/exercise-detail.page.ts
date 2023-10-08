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
  countsArray: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countService: CountService
  ) {}

  HanddleCount(parentId: number, exerciseId: number) {
    const count = this.countService.getCounts();
    this.countsArray = count ? [...count] : [];

    // Lấy giá trị count cho bài tập hiện tại
    const currentExerciseCount = this.countsArray.find(
      (item) => item.parentId === parentId && item.exerciseId === exerciseId
    );
    this.count = currentExerciseCount ? currentExerciseCount.count : 0;

    // Tăng giá trị count lên 1
    this.count++;

    // Lưu giá trị count vào mảng countsArray
    const existingIndex = this.countsArray.findIndex(
      (item) => item.parentId === parentId && item.exerciseId === exerciseId
    );
    if (existingIndex !== -1) {
      this.countsArray[existingIndex].count = this.count;
    } else {
      this.countsArray.push({ parentId, exerciseId, count: this.count });
    }

    // Lưu giá trị count vào local storage
    this.countService.saveCount(parentId, exerciseId, this.count);
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
        // Xử lý count
        this.HanddleCount(categoryId, exerciseId);
      } else {
        console.error('ID không hợp lệ.');
      }
    });
  }
}
