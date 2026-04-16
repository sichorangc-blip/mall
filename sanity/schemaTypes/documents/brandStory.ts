import { defineField, defineType } from 'sanity';

export const brandStoryType = defineType({
  name: 'brandStory',
  title: 'Brand Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: '브랜드명', type: 'string' }),
    defineField({ name: 'slogan', title: '슬로건', type: 'string' }),
    defineField({ name: 'description', title: '브랜드 소개', type: 'text', rows: 5 })
  ]
});
