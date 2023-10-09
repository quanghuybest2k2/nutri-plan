export interface CalorieCard {
    id: number,
    name: string,
    image: string,
    calorie: number,
    description: string,
    isDish: boolean
}

export const CalorieCardsList: CalorieCard[] = [
    {
        id: 1,
        name: "Bánh kem",
        image: "https://statics.vincom.com.vn/xu-huong/anh_thumbnail/image12-1670493799.png",
        calorie: 300,
        description: "Đồ ăn ngọt",
        isDish: true
    },
    {
        id: 2,
        name: "Pizza",
        image: "https://img.dominos.vn/cach-lam-pizza-chay-0.jpg",
        calorie: 266,
        description: "Đồ ăn Ý",
        isDish: true
    },
    {
        id: 3,
        name: "Cơm tấm",
        image: "https://images.elipsport.vn/anh-seo-tin-tuc/2020/12/21/com-tam-bao-nhieu-calo-an-nhieu-co-map-khong-1.jpg",
        calorie: 566,
        description: "Đồ ăn Việt",
        isDish: true
    },
    {
        id: 4,
        name: "Chạy bộ",
        image: "https://www.suckhoedothi.com/wp-content/uploads/2023/02/images5356076_25_2.1.jpg",
        calorie: 500,
        description: "Chạy 30 phút",
        isDish: false
    },
    {
        id: 5,
        name: "Bơi lội",
        image: "https://www.bhswim.com/Data/Sites/1/media/tintuc/su-hap-dan-cua-boi-loi/muon-thay-duoc-suc-hap-dan-cua-mon-boi-loi.jpg",
        calorie: 655,
        description: "Bơi 50 thước/phút",
        isDish: false
    },
    {
        id: 6,
        name: "Đi dạo",
        image: "https://afamilycdn.com/2020/1/5/hatangthanh791626921996459745278963724914511153636793n-15781930172431252430968.jpg",
        calorie: 100,
        description: "Đi khoảng 2000 bước",
        isDish: false
    },
    {
        id: 7,
        name: "Lẩu bò",
        image: "https://amthucbonmua.vn/wp-content/uploads/2023/06/cach-nau-lau-bo-nam-3.jpg",
        calorie: 1200,
        description: "Phần 1 người ăn",
        isDish: true
    },

    {
        id: 8,
        name: "Gà rán",
        image: "https://texaschickenvn.com/vnt_upload/product/07_2022/Ga_gion_co_xuong___1_mieng_1.png",
        calorie: 200,
        description: "Phần 100g",
        isDish: true
    },
    {
        id: 9,
        name: "Squat",
        image: "https://images.elipsport.vn/news/2020/4/28/huong-dan-cac-bai-tap-squat-tai-nha-cho-nam-mong-to.1588067225.jpg",
        calorie: 15,
        description: "Tốc độ 100 lần/phút",
        isDish: false
    },
    {
        id: 10,
        name: "Yoga",
        image: "hhttps://ggfc.vn/uploads/yoga/tap-yoga-ngoai-30-5.jpg",
        calorie: 300,
        description: "Tập 1 giờ",
        isDish: false
    }

]