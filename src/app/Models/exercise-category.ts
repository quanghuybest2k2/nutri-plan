export interface Exercise {
  id: number;
  ten: string;
  moTa: string;
  hinhAnh: string;
  phut: number;
  calo: number;
  urlVideo: string;
  content: string;
}

export interface ExerciseCategory {
  id: number;
  tenDanhMuc: string;
  theLoai: string;
  exercises: Exercise[];
}

export const Categories: ExerciseCategory[] = [
  {
    id: 1,
    tenDanhMuc: 'GYM',
    theLoai: 'Tập nặng',
    exercises: [
      {
        id: 1,
        ten: 'Goblet squat',
        moTa: 'Thân trên',
        hinhAnh: 'https://i.ytimg.com/vi/1oed-UmAxFs/maxresdefault.jpg',
        phut: 5,
        calo: 120,
        urlVideo: '',
        content:
          'Đứng thẳng, giữ tạ trước ngực. Hạ cơ thể xuống như ngồi xuống ghế, giữ đầu gối ở vị trí vuông góc. Đứng dậy để hoàn thành một lần lặp.',
      },
      {
        id: 2,
        ten: 'Seated cable rows',
        moTa: 'Tay',
        hinhAnh:
          'https://gymsquad.vn/data/upload/media/images/Content%20SEO/tac-dung-tap-gym.jpg',
        phut: 7,
        calo: 420,
        urlVideo: '',
        content:
          'Ngồi trên máy câble, kéo tay câble về phía bạn, giữ người thẳng và lưng không vênh. Giữ tay ở vị trí gần ngực và sau đó đưa tay ra thẳng. Đặt tay về vị trí ban đầu để hoàn thành một lần lặp.',
      },
      {
        id: 3,
        ten: 'Walking lunges',
        moTa: 'Thân dưới',
        hinhAnh:
          'https://hdfitness.vn/wp-content/uploads/2022/03/truoc-va-sau-khi-tap-gym-4-min-1-scaled.jpg',
        phut: 12,
        calo: 220,
        urlVideo: '',
        content:
          'Bước về phía trước với một chân, hạ cơ thể xuống cho đến khi đùi song song với sàn. Sau đó đứng dậy và bước về phía trước với chân còn lại. Lặp lại quá trình này.',
      },
    ],
  },
  {
    id: 2,
    tenDanhMuc: 'YOGA',
    theLoai: 'Tập nhẹ',
    exercises: [
      {
        id: 1,
        ten: 'Yoga Pose 1',
        moTa: 'Mô tả bài tập Yoga Pose 1',
        hinhAnh:
          'https://yogapractice.com/wp-content/uploads/2018/06/15-Crazy-Yoga-Poses-You-Wish-You-Could-Strike-1.jpg',
        phut: 10,
        calo: 80,
        urlVideo: '',
        content: 'Hướng dẫn chi tiết cách thực hiện Yoga Pose 1.',
      },
      {
        id: 2,
        ten: 'Yoga Pose 2',
        moTa: 'Mô tả bài tập Yoga Pose 2',
        hinhAnh:
          'https://www.ekhartyoga.com/media/images/articles/content/Warrior-2-yoga-pose-Virabhadrasana-II-Ekhart-Yoga.jpg',
        phut: 12,
        calo: 90,
        urlVideo: '',
        content: 'Hướng dẫn chi tiết cách thực hiện Yoga Pose 2.',
      },
      //
    ],
  },
  {
    id: 3,
    tenDanhMuc: 'JUMPING',
    theLoai: 'Tập nặng',
    exercises: [
      {
        id: 1,
        ten: 'Jumping Jacks',
        moTa: 'Mô tả bài tập Jumping Jacks',
        hinhAnh:
          'https://www.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.jpg',
        phut: 8,
        calo: 70,
        urlVideo: '',
        content: 'Hướng dẫn chi tiết cách thực hiện Jumping Jacks.',
      },
      {
        id: 2,
        ten: 'Jumping Squats',
        moTa: 'Mô tả bài tập Jumping Squats',
        hinhAnh:
          'https://www.spotebi.com/wp-content/uploads/2015/08/jump-squat-exercise-illustration.jpg',
        phut: 10,
        calo: 85,
        urlVideo: '',
        content: 'Hướng dẫn chi tiết cách thực hiện Jumping Squats.',
      },
      //
    ],
  },
];
