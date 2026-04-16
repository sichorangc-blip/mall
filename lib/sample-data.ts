import { BrandStory, FaqItem, LookbookEntry, Product } from "@/lib/types";

export const sampleBrandStory: BrandStory = {
  title: "아이셋 ISET",
  slogan: "Set for us, I set",
  summary:
    "15년간 생활위생용품을 기획한 경험을 바탕으로, 가족을 위한 더 나은 일상의 기준을 제안합니다.",
  longDescription:
    "아이셋은 가족에게 맞는 최적의 세팅값을 구현한 생활위생 제품을 지향합니다. 조용하고 정돈된 일상의 리듬 속에서 안심하고 사용할 수 있는 제품을 연구합니다."
};

export const sampleProducts: Product[] = [
  {
    _id: "p1",
    name: "아이셋 촉촉핏 아쿠아에어 가습마스크",
    subtitle: "AQUA AIR",
    description: "건조한 환경을 고려한 편안한 착용감 중심의 제품",
    imageUrl:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    _id: "p2",
    name: "아이셋 라이트핏 맥스에어 KF94 마스크",
    subtitle: "MAX AIR KF94",
    description: "일상 속 균형감을 고려한 보호 성능 제품",
    imageUrl:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1000&q=80"
  },
  {
    _id: "p3",
    name: "아이셋 라이트핏 슬림에어 KF-AD 마스크",
    subtitle: "SLIM AIR KF-AD",
    description: "가볍고 부담 없는 착용을 위한 데일리 제품",
    imageUrl:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1000&q=80"
  },
  {
    _id: "p4",
    name: "아이셋 썸머핏 쿨링마스크",
    subtitle: "SUMMER FIT",
    description: "계절감과 쾌적함을 고려한 썸머 라인",
    imageUrl:
      "https://images.unsplash.com/photo-1608439894523-c51c83f6d2cc?auto=format&fit=crop&w=1000&q=80"
  }
];

export const sampleLookbook: LookbookEntry[] = [
  {
    _id: "l1",
    title: "Daily Setting 01",
    season: "2026 SS",
    caption: "밝고 간결한 데일리 무드",
    imageUrl:
      "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    _id: "l2",
    title: "Family Routine 02",
    season: "2026 SS",
    caption: "아이와 함께하는 주말의 동선",
    imageUrl:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80"
  }
];

export const sampleFaq: FaqItem[] = [
  {
    _id: "f1",
    question: "구매는 어디에서 가능한가요?",
    answer: "아이셋 제품은 네이버 스마트스토어에서 구매하실 수 있습니다."
  },
  {
    _id: "f2",
    question: "제품 정보는 어디에서 확인하나요?",
    answer: "COLLECTION 페이지에서 제품별 핵심 정보와 링크를 확인할 수 있습니다."
  }
];
