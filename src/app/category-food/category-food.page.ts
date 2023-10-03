import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';
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
  constructor(
    
    private navCtrl: NavController,
    private localStorageService: LocalStorageService
  ) { }

  ionViewWillEnter() {
    this.loadFoodItems();
    this.filterFoodItems();
  }

  loadFoodItems() {
    // Dữ liệu mẫu thức ăn với chuyên mục
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
      { id: 11, name: 'Bơ', category: 'Trái cây', image: 'bo.jpg', suitable: 'mập', bmi: 18.5 },
      { id: 12, name: 'Ngũ cốc', category: 'Trái cây', image: 'ngucoc.jpg', suitable: 'Bình thường, Ốm', bmi: 18.5 },


    ];

    const storedData = this.localStorageService.getData('foodItems');
    if (!storedData) {
      this.localStorageService.setData('foodItems', foodItems);
    }

    // Lấy dữ liệu từ Local Storage
    this.foodItems = this.localStorageService.getData('foodItems') || [];
  }
  navigateToFoodDetails(foodItemId: number) {
    this.navCtrl.navigateForward(`/food-details/${foodItemId}`);
  }
  filterFoodItems() {
    if (this.selectedSuitable) {
      this.filteredFoodItems = this.foodItems.filter(
        (food) => food.suitable === this.selectedSuitable
      );
    } else {
      // Hiển thị tất cả thức ăn nếu không có chuyên mục nào được chọn
      this.filteredFoodItems = this.foodItems;
    }
  }
  featuredFoodItems: any[] = [
    { id: 13, name: 'Thức ăn nổi bật 2', category: 'Mặn', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    // Thêm các thức ăn nổi bật khác vào đây với URL hình ảnh tương ứng
  ];
  avoidFoodItems: any[] = [
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    // Thêm các thức ăn nổi bật khác vào đây với URL hình ảnh tương ứng
    { id: 13, name: 'Gạo Lức', category: 'Mặn', imageUrl: '' },
    { id: 14, name: 'Thức ăn nổi bật 2', category: 'Ngọt', imageUrl: 'URL_CUA_ANH_2' },
    { id: 15, name: 'Thức ăn nổi bật 3', category: 'Củ', imageUrl: 'URL_CUA_ANH_3' },
    // Thêm các thức ăn nổi bật khác vào đây với URL hình ảnh tương ứng
    // Thêm các thức ăn nổi bật khác vào đây với URL hình ảnh tương ứng
  ];

  
  
}
