import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BMIPageModule)
  },
  {
    path: 'list-exercise',
    loadChildren: () => import('./list-exercise/list-exercise.module').then( m => m.ListExercisePageModule)
  },
  {
    path: 'food-details/:id',
    loadChildren: () =>
      import('./food-details/food-details.module').then(
        (m) => m.FoodDetailsPageModule
      ),
  },
  {
    path: 'category-food',
    loadChildren: () => import('./category-food/category-food.module').then( m => m.CategoryFoodPageModule)
  },
  {
    path: 'exercise-detail/:id',
    loadChildren: () => import('./exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
