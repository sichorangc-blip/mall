export const brandQuery = `*[_type == "brandStory"][0]{title, slogan, description}`;
export const productsQuery = `*[_type == "product"] | order(order asc){_id, name, subtitle, description, externalUrl, "image":image.asset->url}`;
export const lookbookQuery = `*[_type == "lookbook"] | order(publishedAt desc){_id, title, caption, "image":image.asset->url}`;
export const faqQuery = `*[_type == "faq"] | order(order asc){_id, question, answer}`;
