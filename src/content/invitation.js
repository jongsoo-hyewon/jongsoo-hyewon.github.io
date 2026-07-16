// 콘텐츠와 노출 순서는 이 파일에서만 관리합니다.
// 섹션을 숨기려면 sectionOrder에서 이름을 지우면 됩니다.
export const sectionOrder = ['hero', 'message', 'gallery', 'countdown', 'ceremony', 'transport', 'accounts', 'footer']

export const invitation = {
  theme: 'classic',
  music: { src: '/bgm.mp3', label: 'BGM' },
  hero: {
    eyebrow: 'WEDDING INVITATION',
    names: '금종수 · 강혜원',
    date: '2026. 11. 15. SUN · 15:00',
    image: '/images/hero-demo.jpg',
    imagePosition: 'center 38%',
    overlay: 0.6,
  },
  message: {
    title: 'We are getting married',
    body: '서로의 가장 평범한 날들을\n가장 특별하게 만들어 갈 두 사람이\n새로운 시작을 함께합니다.',
  },
  gallery: {
    title: '우리의 순간',
    imagePosition: 'center',
    imageFit: 'cover',
    images: [
      '/images/gallery-01.jpg',
      '/images/gallery-02.jpg',
      '/images/gallery-03.jpg',
      '/images/gallery-04.jpg',
      '/images/gallery-05.jpg',
      '/images/gallery-06.jpg',
      '/images/gallery-07.jpg',
    ],
  },
  countdown: { eventDate: '2026-11-15T15:00:00+09:00' },
  ceremony: {
    date: '2026년 11월 15일 일요일 오후 3시',
    venue: '세빛섬 플로팅아일랜드',
    address: '서울특별시 서초구 올림픽대로 2085-14',
    kakaoMapUrl: 'https://map.kakao.com/link/search/%EC%84%B8%EB%B9%9B%EC%84%AC%20%ED%94%8C%EB%A1%9C%ED%8C%85%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C',
    naverMapUrl: 'https://map.naver.com/p/search/%EC%84%B8%EB%B9%9B%EC%84%AC%20%ED%94%8C%EB%A1%9C%ED%8C%85%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=%EC%84%B8%EB%B9%9B%EC%84%AC%20%ED%94%8C%EB%A1%9C%ED%8C%85%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C',
  },
  transport: {
    title: '오시는 길 안내',
    subway: '3·7·9호선 고속터미널역 6번 출구로 나오신 뒤, 세빛섬 순환 셔틀버스를 이용해 주세요.',
    shuttle: '셔틀버스는 고속터미널역 6번 출구와 세빛섬을 오갑니다. 예식일 운행 시간과 간격은 행사 전 다시 안내드리겠습니다.',
    note: '주말 교통 혼잡이 예상되니 여유 있게 출발해 주세요.',
  },
  accounts: {
    title: '마음 전하실 곳',
    items: [
      { label: '신랑 금종수', value: '000-0000-0000-00' },
      { label: '신부 강혜원', value: '000-0000-0000-00' },
    ],
  },
  footer: { text: '함께해 주셔서 감사합니다.' },
}
