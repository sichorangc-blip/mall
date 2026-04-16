export type BrandStory = {
  title: string;
  slogan: string;
  summary: string;
  longDescription: string;
};

export type Product = {
  _id: string;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
};

export type LookbookEntry = {
  _id: string;
  title: string;
  season: string;
  caption: string;
  imageUrl: string;
};

export type FaqItem = {
  _id: string;
  question: string;
  answer: string;
};
