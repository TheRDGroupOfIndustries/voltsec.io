import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "blogName",
      title: "Blog Name",
      type: "string",
    }),
    defineField({
      name: "blogSlug",
      title: "Blog Slug",
      type: "slug",
      options: {
        source: "blogName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "blogImage",
      title: "Blog Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "blogName",
      media: "blogImage",
    },
  },
});
