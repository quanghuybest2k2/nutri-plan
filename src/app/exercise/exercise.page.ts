import { Component, OnInit } from '@angular/core';
import { Categories, ExerciseCategory } from '../Models/exercise-category';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  colors: string[] = ['#f6cc38', '#558ec5', '#ee9cd2', '#ffffff'];
  listExercise: ExerciseCategory[] = Categories;

  constructor() {}

  ngOnInit() {}

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}
