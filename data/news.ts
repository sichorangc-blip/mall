export type NewsCategory = '공지' | '보도자료' | '이벤트' | '가이드';

export type NewsPost = {
  slug: string;
  category: NewsCategory;
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  content: string[];
};

export const newsPosts: NewsPost[] = [
  { slug:'iset-aqua-air-mask-launch', category:'보도자료', title:'아이셋, 촉촉핏 아쿠아에어 가습마스크 출시', date:'2026-05-21', summary:'생활위생 브랜드 아이셋이 브랜드 첫 제품으로 촉촉핏 아쿠아에어 가습마스크를 선보입니다.', thumbnail:'/images/news/aqua-air-launch.jpg', content:['생활위생 브랜드 아이셋(ISET)이 브랜드 첫 제품으로 아이셋 촉촉핏 아쿠아에어 가습마스크를 출시했습니다.','아이셋은 Set for us, I set이라는 슬로건 아래 가족의 일상에 맞춘 생활위생 제품을 제안합니다.','제품은 건조함이 느껴지는 실내, 이동, 수면 전후 등 다양한 일상 상황에서 사용할 수 있도록 기획되었습니다.']},
  { slug:'official-site-open', category:'공지', title:'아이셋 공식 홈페이지 오픈 안내', date:'2026-05-21', summary:'아이셋 브랜드와 제품 소식을 전하는 공식 홈페이지가 오픈되었습니다.', thumbnail:'/images/news/site-open.jpg', content:['아이셋 공식 홈페이지가 오픈되었습니다.','앞으로 브랜드 소식, 제품 안내, 사용 가이드, 이벤트 소식을 이곳에서 전하겠습니다.']},
  { slug:'humidifying-pad-guide', category:'가이드', title:'가습패드 사용 방법 안내', date:'2026-05-21', summary:'아이셋 촉촉핏 아쿠아에어 가습마스크의 가습패드 사용 방법을 안내합니다.', thumbnail:'/images/news/pad-guide.jpg', content:['가습패드는 제품 안내에 따라 물을 적신 뒤 가볍게 정리해 사용합니다.','사용 전 제품 상세 안내와 주의사항을 확인해 주세요.']},
  { slug:'summer-experience-event', category:'이벤트', title:'썸머핏 체험단 모집 안내', date:'2026-05-20', summary:'아이셋 썸머핏 쿨링마스크 체험단을 모집합니다.', thumbnail:'/images/news/summer-event.jpg', content:['아이셋 썸머핏 쿨링마스크 체험단을 모집합니다.','신청 방법과 일정은 공식 채널을 통해 확인 가능합니다.']}
];

export const sortedNewsPosts = [...newsPosts].sort((a,b)=> (a.date < b.date ? 1 : -1));
