import { groq } from "next-sanity";

export const brandStoryQuery = groq`*[_type == "brandStory"][0]{
  title,
  slogan,
  summary,
  longDescription
}`;

export const productsQuery = groq`*[_type == "product"] | order(order asc){
  _id,
  name,
  subtitle,
  description,
  "imageUrl": image.asset->url
}`;

export const lookbookQuery = groq`*[_type == "lookbook"] | order(publishedAt desc){
  _id,
  title,
  season,
  caption,
  "imageUrl": image.asset->url
}`;

export const faqQuery = groq`*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer
}`;
