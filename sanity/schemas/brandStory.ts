import { defineField, defineType } from "sanity";

export const brandStoryType = defineType({
  name: "brandStory",
  title: "Brand Story",
  type: "document",
  fields: [
    defineField({ name: "title", title: "브랜드명", type: "string", initialValue: "아이셋 ISET" }),
    defineField({ name: "slogan", title: "슬로건", type: "string", initialValue: "Set for us, I set" }),
    defineField({ name: "summary", title: "요약", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "상세 소개", type: "text", rows: 8 })
  ]
});
