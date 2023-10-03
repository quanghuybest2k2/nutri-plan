import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {
  foodItem: any = {};
  fiveStarRatings: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const foodItemId = params.get('id');
      console.log('foodItemId:', foodItemId);
      this.foodItem = this.getFoodItemById(foodItemId);
      this.foodItem.recipe = this.foodItem.recipe.replace(/\n/g, '<br>');
      this.foodItem.work = this.foodItem.work.replace(/\n/g, '<br>');
    });
  }
  goBack() {
    this.router.navigate(['/category-food']); // Điều hướng về trang chính, bạn có thể thay đổi URL theo trang mà bạn muốn quay lại
  }
  getFoodItemById(id: string | null): any {
    if (id === null) {
      return {}; // Hoặc giá trị mặc định khác tùy bạn
    }
    const foodItems = this.localStorageService.getData('foodItems') || [];
    return foodItems.find((item: any) => item.id === parseInt(id, 10)) || {};
  }
}
