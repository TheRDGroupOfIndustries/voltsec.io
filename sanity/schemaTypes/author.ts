import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "authorSlug",
      title: "Author Slug",
      type: "slug",
      options: {
        source: "authorName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "authorEmail",
      title: "Author Email",
      type: "string",
    }),
    defineField({
      name: "authorBio",
      title: "Author Bio",
      type: "text",
    }),
  ],
});
