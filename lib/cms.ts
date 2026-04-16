import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { brandStoryQuery, faqQuery, lookbookQuery, productsQuery } from "@/lib/sanity/queries";
import { sampleBrandStory, sampleFaq, sampleLookbook, sampleProducts } from "@/lib/sample-data";
import { BrandStory, FaqItem, LookbookEntry, Product } from "@/lib/types";

export async function getBrandStory(): Promise<BrandStory> {
  if (!sanityEnabled) return sampleBrandStory;
  const data = await sanityClient.fetch<BrandStory | null>(brandStoryQuery);
  return data ?? sampleBrandStory;
}

export async function getProducts(): Promise<Product[]> {
  if (!sanityEnabled) return sampleProducts;
  const data = await sanityClient.fetch<Product[]>(productsQuery);
  return data?.length ? data : sampleProducts;
}

export async function getLookbook(): Promise<LookbookEntry[]> {
  if (!sanityEnabled) return sampleLookbook;
  const data = await sanityClient.fetch<LookbookEntry[]>(lookbookQuery);
  return data?.length ? data : sampleLookbook;
}

export async function getFaq(): Promise<FaqItem[]> {
  if (!sanityEnabled) return sampleFaq;
  const data = await sanityClient.fetch<FaqItem[]>(faqQuery);
  return data?.length ? data : sampleFaq;
}
