import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then((m) => m.BMIPageModule),
  },
  {
    path: 'list-exercise/:id',
    loadChildren: () =>
      import('./list-exercise/list-exercise.module').then(
        (m) => m.ListExercisePageModule
      ),
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
    loadChildren: () =>
      import('./category-food/category-food.module').then(
        (m) => m.CategoryFoodPageModule
      ),
  },
  {
    path: 'exercise-detail/:parentId/:id',
    loadChildren: () =>
      import('./exercise-detail/exercise-detail.module').then(
        (m) => m.ExerciseDetailPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'diet',
    loadChildren: () =>
      import('./diet/diet.module').then((m) => m.DietPageModule),
  },
  {
    path: 'exercise',
    loadChildren: () =>
      import('./exercise/exercise.module').then((m) => m.ExercisePageModule),
  },  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
