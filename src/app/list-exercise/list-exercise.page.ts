import { Component, OnInit } from '@angular/core';
import { Categories, ExerciseCategory } from '../Models/exercise-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit {
  exercises: ExerciseCategory[] = Categories;
  selectedCategory: ExerciseCategory | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null && idParam !== undefined) {
        const exerciseId = +idParam;
        // Tìm danh mục trong listExercise dựa trên ID
        this.selectedCategory = this.exercises.find((e) => e.id === exerciseId);
        // Kiểm tra danh mục có tồn tại không
        if (!this.selectedCategory) {
          console.error('Không tìm thấy danh mục với ID được cung cấp.');
        }
      } else {
        console.error('ID không hợp lệ.');
      }
    });
  }
}
