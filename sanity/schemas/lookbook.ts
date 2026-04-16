import { defineField, defineType } from "sanity";

export const lookbookType = defineType({
  name: "lookbook",
  title: "Lookbook",
  type: "document",
  fields: [
    defineField({ name: "title", title: "룩북 제목", type: "string" }),
    defineField({ name: "season", title: "시즌", type: "string", initialValue: "2026 SS" }),
    defineField({ name: "caption", title: "설명", type: "text", rows: 3 }),
    defineField({ name: "publishedAt", title: "게시일", type: "datetime" }),
    defineField({ name: "image", title: "이미지", type: "image", options: { hotspot: true } })
  ]
});
