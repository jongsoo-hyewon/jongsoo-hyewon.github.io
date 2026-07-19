// 콘텐츠와 노출 순서는 이 파일에서만 관리합니다.
// 섹션을 숨기려면 sectionOrder에서 이름을 지우면 됩니다.
export const sectionOrder = [
  "hero",
  "message",
  "gallery",
  "countdown",
  "ceremony",
  "transport",
  "contacts",
  "accounts",
  "footer",
];

export const invitation = {
  theme: "classic",
  music: { src: "/bgm.mp3", label: "BGM" },
  hero: {
    eyebrow: "WEDDING INVITATION",
    names: "금종수 · 강혜원",
    date: "2026. 11. 15. SUN · 15:00",
    image: "/images/hero.jpg",
    imagePosition: "center 38%",
    overlay: 0.6,
  },
  message: {
    title: "We are getting married",
    body: "서로의 가장 평범한 날들을\n가장 특별하게 만들어 갈 두 사람이\n새로운 시작을 함께합니다.",
  },
  gallery: {
    title: "우리의 순간",
    imagePosition: "center",
    imageFit: "cover",
    images: [
      "/images/gallery-01.JPG",
      "/images/gallery-02.JPG",
      "/images/gallery-03.JPG",
      "/images/gallery-04.JPG",
      "/images/gallery-05.JPG",
      "/images/gallery-06.JPG",
      "/images/gallery-07.JPG",
      "/images/gallery-08.JPG",
      "/images/gallery-09.JPG",
      "/images/gallery-10.JPG",
      "/images/gallery-11.JPG",
      "/images/gallery-12.JPG",
      "/images/gallery-13.JPG",
      "/images/gallery-14.JPG",
      "/images/gallery-15.JPG",
      "/images/gallery-16.JPG",
      "/images/gallery-17.JPG",
      "/images/gallery-18.JPG",
      "/images/gallery-19.JPG",
      "/images/gallery-20.JPG",
      "/images/gallery-21.JPG",
      "/images/gallery-22.JPG",
    ],
  },
  countdown: { eventDate: "2026-11-15T15:00:00+09:00" },
  ceremony: {
    date: "2026년 11월 15일 일요일 오후 3시",
    venue: "세빛섬 플로팅아일랜드",
    address: "서울특별시 서초구 올림픽대로 2085-14",
    kakaoMapUrl:
      "https://map.kakao.com/link/search/%EC%84%B8%EB%B9%9B%EC%84%AC%20%ED%94%8C%EB%A1%9C%ED%8C%85%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C",
    naverMapUrl:
      "https://map.naver.com/p/entry/place/34698773?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607170000%26locale%3Dko%26svcName%3Dmap_pcv5",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%EC%84%B8%EB%B9%9B%EC%84%AC%20%ED%94%8C%EB%A1%9C%ED%8C%85%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C",
  },
  transport: {
    title: "오시는 길 안내",
    subway:
      "3·7·9호선 고속터미널역 8-1번 출구에서 약 650m, 도보 약 15분입니다. 반포대로 방향으로 직진해 잠수교 북단 지하보도를 이용해 주세요.",
    bus: "반포한강공원.세빛섬: 405, 740번\n반포대교 남단.한강시민공원 입구: 143, 401, 406번\n정류장에서 하차 후 세빛섬까지 도보로 이동합니다.",
    shuttle:
      "예식장 셔틀버스가 상시 운행됩니다. 고속터미널역 6번 출구에서 탑승해 약 5분 이동합니다.",
    driving:
      "내비게이션에 ‘세빛섬’ 또는 ‘반포한강공원 2주차장’을 검색해 주세요. 주소는 서울특별시 서초구 올림픽대로 2085-14입니다.",
    parking: "반포한강공원 제2주차장을 이용해 주세요.",
    note: "",
  },
  accounts: {
    groups: [
      {
        title: "신랑측에게",
        items: [
          {
            label: "신랑",
            name: "금종수",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
          {
            label: "신랑 아버지",
            name: "신랑 아버지",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
          {
            label: "신랑 어머니",
            name: "신랑 어머니",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
        ],
      },
      {
        title: "신부측에게",
        items: [
          {
            label: "신부",
            name: "강혜원",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
          {
            label: "신부 아버지",
            name: "신부 아버지",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
          {
            label: "신부 어머니",
            name: "신부 어머니",
            bank: "은행명",
            value: "000-0000-0000-00",
          },
        ],
      },
    ],
    title: "마음 전하실 곳",
    items: [
      { label: "신랑 금종수", bank: "은행명", value: "000-0000-0000-00" },
      { label: "신부 강혜원", bank: "은행명", value: "000-0000-0000-00" },
    ],
  },
  contacts: {
    groom: [
      { name: "신랑 금종수", relation: "신랑", phone: "010-0000-0000" },
      { name: "신랑 아버지", relation: "신랑 아버지", phone: "010-0000-0000" },
      { name: "신랑 어머니", relation: "신랑 어머니", phone: "010-0000-0000" },
    ],
    bride: [
      { name: "신부 강혜원", relation: "신부", phone: "010-0000-0000" },
      { name: "신부 아버지", relation: "신부 아버지", phone: "010-0000-0000" },
      { name: "신부 어머니", relation: "신부 어머니", phone: "010-0000-0000" },
    ],
  },
  footer: { text: "함께해 주셔서 감사합니다." },
};
