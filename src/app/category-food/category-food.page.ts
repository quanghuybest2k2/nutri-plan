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
        name: 'Bún riêu 1',
        category: 'Mặn',
        image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg',
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
        name: 'Bún riêu 2',
        category: 'Mặn',
        image: 'https://i.pinimg.com/236x/8b/33/ec/8b33ecf95cfcea0a130ae19bb064cbb1.jpg',
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
      {  id: 3,
        name: 'Bún riêu 3',
        category: 'Mặn',
        image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg',
        suitable: 'Bất kỳ',
        calories: 220,
        recipe: `
          Nguyên liệu:
          - Khoai tây: 4 củ
          - Dầu ăn
          - Muối
          - Tiêu
          
          Cách làm:
          1. Gọt vỏ và cắt khoai tây thành lát dày khoảng 1/4 inch.
          2. Đun nóng dầu ăn trong nồi sâu.
          3. Cho khoai tây vào dầu nóng và chiên đến khi chúng có màu vàng đẹp.
          4. Gắp khoai tây ra, để ráo dầu thừa, và gia vị với muối và tiêu.
          5. Món khoai tây chiên sẽ ngon nhất khi còn nóng.` },
      { id: 4, name: 'Bún riêu cua', category: 'Ngọt', image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg', suitable: 'Ốm', calories: 18.5 },
      { id: 5, name: 'Bún riêu cua', category: 'Mặn', image: 'https://i.pinimg.com/236x/8b/33/ec/8b33ecf95cfcea0a130ae19bb064cbb1.jpg', suitable: 'Gầy', calories: 18.5 },
      { id: 6, name: 'Bún riêu cua', category: 'Củ', image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg', suitable: 'Bình thường', calories: 23 },
      { id: 7, name: 'Bún riêu cua', category: 'Củ', image: 'https://i.pinimg.com/236x/8b/33/ec/8b33ecf95cfcea0a130ae19bb064cbb1.jpg', suitable: 'mập', calories: 23 },
      { id: 8, name: 'Bún riêu cua', category: 'Ngọt', image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg', suitable: 'ốm', calories: 18.5 },
      { id: 9, name: 'Bún riêu cua', category: 'Trái cây', image: 'https://i.pinimg.com/236x/8b/33/ec/8b33ecf95cfcea0a130ae19bb064cbb1.jpg', suitable: 'Béo phì', calories: 18.5 },
      { id: 10, name: 'Bún riêu cua', category: 'Mặn', image: 'https://i.pinimg.com/236x/28/54/64/2854647fe2bb9ea2708c7ee2b3d31613.jpg', suitable: 'Bình thường', calories: 18.5 },
      {
        id: 11,
        name: 'Bún riêu cua',
        category: 'Mặn',
        image: 'https://i.pinimg.com/236x/8b/33/ec/8b33ecf95cfcea0a130ae19bb064cbb1.jpg',
        suitable: 'Bất kỳ',
        calories: 320,
        recipe: `
          Nguyên liệu:
          - Đậu đen: 250g
          - Thịt bò xay: 300g
          - Hành tây: 1 củ
          - Tỏi: 3 tép
          - Ớt chuông đỏ: 1 trái
          - Dầu ăn
          - Muối
          - Tiêu
          
          Cách làm:
          1. Rửa sạch đậu đen và ngâm nước từ tối hôm trước.
          2. Phi thơm tỏi và hành tây, sau đó cho thịt bò xay vào xào chín.
          3. Thêm đậu đen và ớt chuông đã thái lát vào nồi, xào đều.
          4. Gia vị với muối và tiêu theo khẩu vị.
          5. Món đậu đen xào thịt bò sẽ ngon khi còn nóng.`
      }
      ,
      { id: 14, name: 'Nổi bật 1', category: 'Trái cây', image: 'https://i.pinimg.com/564x/bd/e3/43/bde34376cd2d7b45a977fc1b71ffd289.jpg',calories: 350, bmi: 18.5, item:'Nổi Bật' },
      { id: 13, name: 'Nổi bật 2', category: 'Trái cây', image: 'https://i.pinimg.com/736x/08/82/9a/08829a909030989c020effb6bd505ea9.jpg',calories: 400, bmi: 18.5, item:'Nổi Bật' },
      { id: 15, name: 'Nổi bật 3', category: 'Trái cây', image: 'https://i.pinimg.com/736x/08/82/9a/08829a909030989c020effb6bd505ea9.jpg',calories: 400, bmi: 18.5, item:'Nổi Bật' },
      { id: 12, name: 'Nổi bật 4', category: 'Trái cây', image: 'https://i.pinimg.com/564x/bd/e3/43/bde34376cd2d7b45a977fc1b71ffd289.jpg',calories: 350, bmi: 18.5, item:'Nổi Bật' },
      { id: 16, name: 'Nổi bật 5', category: 'Trái cây', image: 'https://i.pinimg.com/564x/bd/e3/43/bde34376cd2d7b45a977fc1b71ffd289.jpg',calories: 350, bmi: 18.5, item:'Nổi Bật' },
      { id: 17, name: 'Nổi bật 6', category: 'Trái cây', image: 'https://i.pinimg.com/736x/08/82/9a/08829a909030989c020effb6bd505ea9.jpg',calories: 400, bmi: 18.5, item:'Nổi Bật' },
      { id: 18, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/c0/09/aa/c009aa00b788f8b409e3681072196ccc.jpg', calories: 55, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 19, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/9c/e3/3c/9ce33cc881f8de9957df7ea71ba860dc.jpg',calories: 620, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 20, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/c0/09/aa/c009aa00b788f8b409e3681072196ccc.jpg', calories: 55, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 21, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/9c/e3/3c/9ce33cc881f8de9957df7ea71ba860dc.jpg',calories: 620, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 22, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/c0/09/aa/c009aa00b788f8b409e3681072196ccc.jpg', calories: 55, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 23, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/9c/e3/3c/9ce33cc881f8de9957df7ea71ba860dc.jpg',calories: 620, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 24, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/c0/09/aa/c009aa00b788f8b409e3681072196ccc.jpg', calories: 55, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 25, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/9c/e3/3c/9ce33cc881f8de9957df7ea71ba860dc.jpg',calories: 620, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 26, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/c0/09/aa/c009aa00b788f8b409e3681072196ccc.jpg', calories: 55, bmi: 18.5, item:'Thức ăn cần tránh' },
      { id: 27, name: 'Thức ăn nhanh', category: 'Thức ăn nhanh', image: 'https://i.pinimg.com/236x/9c/e3/3c/9ce33cc881f8de9957df7ea71ba860dc.jpg',calories: 620, bmi: 18.5, item:'Thức ăn cần tránh' },
      
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
