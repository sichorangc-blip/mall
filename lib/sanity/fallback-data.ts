import type { BrandStory, FAQItem, LookbookItem, Product } from '@/lib/sanity/types';

export const fallbackBrand: BrandStory = {
  title: '아이셋 ISET',
  slogan: 'Set for us, I set',
  description:
    '15년간 생활위생용품을 기획한 경험을 바탕으로, 아이들과 가족을 위한 더 나은 일상의 기준을 고민하는 브랜드입니다.'
};

export const fallbackProducts: Product[] = [
  {
    _id: '1',
    name: '아이셋 촉촉핏 아쿠아에어 가습마스크',
    subtitle: 'Moisture Care Line',
    description: '건조한 계절에도 편안한 호흡감을 위한 가습형 마스크.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    externalUrl: 'https://smartstore.naver.com/iii_setting'
  },
  {
    _id: '2',
    name: '아이셋 라이트핏 맥스에어 KF94 마스크',
    subtitle: 'Daily Protection',
    description: '안정적인 밀착감과 통기성을 함께 고려한 KF94.',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1200&q=80',
    externalUrl: 'https://smartstore.naver.com/iii_setting'
  },
  {
    _id: '3',
    name: '아이셋 라이트핏 슬림에어 KF-AD 마스크',
    subtitle: 'Light Daily Fit',
    description: '가볍고 산뜻한 사용감을 위한 데일리 KF-AD.',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1200&q=80',
    externalUrl: 'https://smartstore.naver.com/iii_setting'
  },
  {
    _id: '4',
    name: '아이셋 썸머핏 쿨링마스크',
    subtitle: 'Summer Comfort',
    description: '더운 계절을 위한 쿨링 사용감 중심의 시즌 라인.',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80',
    externalUrl: 'https://smartstore.naver.com/iii_setting'
  }
];

export const fallbackLookbook: LookbookItem[] = [
  {
    _id: 'l1',
    title: 'Morning Routine',
    caption: '가족의 아침 루틴에 자연스럽게 어울리는 장면',
    image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    _id: 'l2',
    title: 'Calm Daily Wear',
    caption: '깔끔한 톤과 편안한 착용 무드',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
  }
];

export const fallbackFAQ: FAQItem[] = [
  {
    _id: 'f1',
    question: '구매는 어디서 가능한가요?',
    answer: '네이버 스마트스토어에서 구매하실 수 있습니다.'
  },
  {
    _id: 'f2',
    question: '제품 정보는 어떻게 확인하나요?',
    answer: '컬렉션 페이지에서 제품별 핵심 정보와 구매 링크를 확인할 수 있습니다.'
  }
];
