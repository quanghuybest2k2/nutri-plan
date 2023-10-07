import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-category-food',
  templateUrl: './category-food.page.html',
  styleUrls: ['./category-food.page.scss'],
})
export class CategoryFoodPage {
  foodItems: any[] = [];
  filteredFoodItems: any[] = [];
  selectedCategory: string = '';
  selectedSuitable: string = '';
  selectedBMILimit: number = 0;
  featuredFoodItems: any[] = [];
  avoidFoodItems: any[] = [];
  constructor(
    
    private navCtrl: NavController,
    private storageService: StorageService
  ) { }

  ionViewWillEnter() {
    this.loadFoodItems();
    this.filterFoodItems();
  }
  
  loadFoodItems() {
    const foodItems = [
      { id: 1,
        name: 'Bún riêu cua',
        category: 'Mặn',
        image: 'bunrieu.jpg',
        suitable: 'Gầy', 
        calories: 18.5,
        recipe:`
        Nguyên liệu:
        - Cua gạch: 500g
        - Thịt bò xay:200g
        - Bún tươi: 300g
        - Rau sống: rau bún riêu, rau sống tổng hợp
        - Cà chua: 3 trái
        - Bún riêu cua: 1 gói
        - Dầu ăn, gia vị: tiêu, muối, nước mắm`,

      work:` Cách làm:
      1. Làm nước riêu cua: Bỏ vỏ cua, lấy thịt cua ra, băm nhuyễn và xay cùng với cà chua. 
      2. Phi thơm tỏi và hành khô, sau đó đổ nước dùng vào nồi, đun sôi.
      3. Khi nước dùng sôi, cho nước riêu cua vào, khuấy đều và đun sôi lại.
      4. Nêm gia vị với muối, tiêu, nước mắm theo khẩu vị.
      5. Khi nước riêu cua đã ngon, tắt bếp.
      6. Làm thịt bò: Phi thơm tỏi và hành khô, sau đó cho thịt bò xay vào xào chín, nêm gia vị với muối, tiêu, nước mắm.
      7. Luộc bún tươi, rửa sạch và để ráo nước.
      8. Dùng một bát to, bỏ bún vào đáy, trên cùng là rau sống tổng hợp và rau bún riêu.
      9. Rưới nước riêu cua và thịt bò xay lên trên, trang trí thêm cua gạch và tiêu lên trên cùng.
      10. Bún riêu cua thịt bò làm xong, bạn nên ăn nóng mới ngon nhất.
    `   },
      { id: 2, 
        name: 'Cơm',
        category: 'Mặn',
        image: 'com.jpg',
        suitable: 'Gầy',
        recipe:`
        Nguyên liệu:
        - 4 miếng sườn cốt lết heo vừa 
        - 300g gạo tấm
        - 3 quả trứng gà
        - Rau sống: rau bún riêu, rau sống tổng hợp
        - 100g bì heo
        - 50g thịt nạc heo xay
        - Dầu ăn, gia vị: tiêu, muối, nước mắm`,

      work:` Cách làm:
      1. Nấu cơm.
      2. Làm phần sườn cốt lết nướng
      3. Thịt cốt lết mua về rửa sạch và dùng khăn thấm cho ráo.
      4. Ướp thịt theo công thức: 5 cây sả đập dập, ½ muỗng bột ngọt, 1 muỗng hạt nêm.
      5. Nướng từng miếng thịt trên bếp than đến khi chín vàng đều hai mặt.
      6. Làm chả trứng hấp.
      7. Bước 4 Làm bì heo
      8. Làm đồ chua
      9. Làm phần mỡ hành
      10.Pha chế nước mắm`,   
        calories: 18.5 },
      { id: 3, name: 'Gà nướng', category: 'Mặn', image: 'ganuong.jpg', suitable: 'Gầy', calories: 24 },
      { id: 4, name: 'Bánh kem', category: 'Ngọt', image: 'banhkem.jpg', suitable: 'Ốm', calories: 18.5 },
      { id: 5, name: 'Bún riêu cua', category: 'Mặn', image: 'bunrieu.jpg', suitable: 'Gầy', calories: 18.5 },
      { id: 6, name: 'Khoai', category: 'Củ', image: 'che.jpg', suitable: 'Bình thường', calories: 23 },
      { id: 7, name: 'Đậu đen', category: 'Củ', image: 'dauden.jpg', suitable: 'mập', calories: 23 },
      { id: 8, name: 'Sữa', category: 'Ngọt', image: 'sua.jpg', suitable: 'ốm', calories: 18.5 },
      { id: 9, name: 'Nước ép', category: 'Trái cây', image: 'bunrieu.jpg', suitable: 'Béo phì', bmi: 18.5 },
      { id: 10, name: 'Cơm', category: 'Mặn', image: 'che.jpg', suitable: 'Bình thường', bmi: 18.5 },
      { id: 11, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Nổi Bật' },
      { id: 12, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Nổi Bật' },
      { id: 13, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Nổi Bật' },
      { id: 13, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Nổi Bật' },
      { id: 14, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 15, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 16, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 17, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5, item:'Thức ăn cần tránh' },
    ];
    const storedData = this.storageService.get('foodItems');
    if (!storedData) {
      this.storageService.set('foodItems', foodItems);
    }
    this.foodItems = this.storageService.get('foodItems') || [];
    this.foodItems = foodItems;
  }
  
  navigateToFoodDetails(foodItemId: number) {
    this.navCtrl.navigateForward(`/food-details/${foodItemId}`);
  }
  filterFoodItems() {
    if (this.selectedCategory) {
      this.filteredFoodItems = this.foodItems.filter(
        (food) => food.category === this.selectedCategory
      );
    } else {
      this.filteredFoodItems = this.foodItems;
    }
    this.featuredFoodItems = this.foodItems.filter(
      (food) => food.item === 'Nổi Bật'
    );

    this.avoidFoodItems = this.foodItems.filter(
      (food) => food.item === 'Thức ăn cần tránh'
    );
  }  
}
