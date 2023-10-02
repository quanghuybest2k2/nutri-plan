//ng generate class Models/ListExercise  --type=model
export interface Exercise {
  id: number;
  ten: string;
  moTa: string;
  hinhAnh: string;
  phut: number;
  calo: number;
}
export const ListExercise: Exercise[] = [
  {
    id: 1,
    ten: 'Goblet squat',
    moTa: 'Thân trên',
    hinhAnh:
      'https://swequity.vn/wp-content/uploads/2019/06/tap-gym-tang-chieu-cao.jpg',
    phut: 5,
    calo: 120,
  },
  {
    id: 2,
    ten: 'Seated cable rows',
    moTa: 'Tay',
    hinhAnh:
      'https://gymsquad.vn/data/upload/media/images/Content%20SEO/tac-dung-tap-gym.jpg',
    phut: 7,
    calo: 420,
  },
  {
    id: 3,
    ten: 'Walking lunges',
    moTa: 'Thân dưới',
    hinhAnh:
      'https://hdfitness.vn/wp-content/uploads/2022/03/truoc-va-sau-khi-tap-gym-4-min-1-scaled.jpg',
    phut: 12,
    calo: 220,
  },
  //
];
