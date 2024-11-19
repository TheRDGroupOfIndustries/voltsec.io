import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamPortfolio",
  title: "Team Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "employeeName",
      title: "Employee Name",
      type: "string",
    }),
    defineField({
      name: "employeeSlug",
      title: "Employee Slug",
      type: "slug",
      options: {
        source: "employeeName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "employeeImage",
      title: "Employee Image",
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
      name: "department",
      title: "Department",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "employeeName",
      media: "employeeImage",
    },
  },
});
