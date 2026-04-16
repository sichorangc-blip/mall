import { defineField, defineType } from 'sanity';

export const lookbookType = defineType({
  name: 'lookbook',
  title: 'Lookbook',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: '제목', type: 'string' }),
    defineField({ name: 'caption', title: '캡션', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: '이미지', type: 'image' }),
    defineField({ name: 'publishedAt', title: '발행일', type: 'datetime' })
  ]
});
