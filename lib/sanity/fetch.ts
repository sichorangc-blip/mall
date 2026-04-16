import { sanityClient, isSanityReady } from '@/lib/sanity/client';
import { brandQuery, faqQuery, lookbookQuery, productsQuery } from '@/lib/sanity/queries';
import { fallbackBrand, fallbackFAQ, fallbackLookbook, fallbackProducts } from '@/lib/sanity/fallback-data';
import type { BrandStory, FAQItem, LookbookItem, Product } from '@/lib/sanity/types';

export async function getBrandStory(): Promise<BrandStory> {
  if (!isSanityReady) return fallbackBrand;
  return (await sanityClient.fetch(brandQuery)) || fallbackBrand;
}

export async function getProducts(): Promise<Product[]> {
  if (!isSanityReady) return fallbackProducts;
  return (await sanityClient.fetch(productsQuery)) || fallbackProducts;
}

export async function getLookbook(): Promise<LookbookItem[]> {
  if (!isSanityReady) return fallbackLookbook;
  return (await sanityClient.fetch(lookbookQuery)) || fallbackLookbook;
}

export async function getFaq(): Promise<FAQItem[]> {
  if (!isSanityReady) return fallbackFAQ;
  return (await sanityClient.fetch(faqQuery)) || fallbackFAQ;
}
