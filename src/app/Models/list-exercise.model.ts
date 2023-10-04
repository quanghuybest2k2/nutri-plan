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

export const ListExercise: Exercise[] = [
  {
    id: 1,
    ten: 'Goblet squat',
    moTa: 'Thân trên',
    hinhAnh:
      'https://swequity.vn/wp-content/uploads/2019/06/tap-gym-tang-chieu-cao.jpg',
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
  //
];
