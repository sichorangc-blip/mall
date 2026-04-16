import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({ name: "order", title: "정렬 순서", type: "number" }),
    defineField({ name: "name", title: "제품명", type: "string" }),
    defineField({ name: "subtitle", title: "영문 소제목", type: "string" }),
    defineField({ name: "description", title: "설명", type: "text", rows: 3 }),
    defineField({ name: "image", title: "대표 이미지", type: "image", options: { hotspot: true } })
  ]
});
