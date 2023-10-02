import { Component, OnInit } from '@angular/core';
import { Exercise, ListExercise } from '../Models/list-exercise.model';


@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit {
  listExercise: Exercise[] = ListExercise;
  constructor() { }

  ngOnInit() {
  }

}
