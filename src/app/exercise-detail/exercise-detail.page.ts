import { Component, OnInit } from '@angular/core';
import { Exercise, ListExercise } from '../Models/list-exercise.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  exercise: Exercise | undefined;

  listExercise: Exercise[] = ListExercise;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null && idParam !== undefined) {
        const exerciseId = +idParam;
        // Tìm bài tập trong listExercise dựa trên ID
        this.exercise = this.listExercise.find((e) => e.id === exerciseId);
        // Kiểm tra tồn tại
        if (!this.exercise) {
          console.error('Không tìm thấy bài tập với ID được cung cấp.');
        }
      } else {
        console.error('ID không hợp lệ.');
      }
    });
  }
}
