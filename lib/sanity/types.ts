export type BrandStory = {
  title: string;
  slogan: string;
  description: string;
};

export type Product = {
  _id: string;
  name: string;
  subtitle?: string;
  description?: string;
  image?: string;
  externalUrl: string;
};

export type LookbookItem = {
  _id: string;
  title: string;
  caption?: string;
  image?: string;
};

export type FAQItem = {
  _id: string;
  question: string;
  answer: string;
};
