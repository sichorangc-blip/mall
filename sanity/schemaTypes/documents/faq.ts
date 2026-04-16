import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: '정렬 순서', type: 'number' }),
    defineField({ name: 'question', title: '질문', type: 'string' }),
    defineField({ name: 'answer', title: '답변', type: 'text', rows: 4 })
  ]
});
