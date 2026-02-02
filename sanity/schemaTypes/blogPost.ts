import { defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO Settings",
      default: false,
    },
  ],
  fields: [
    // BASIC
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    },

    // SEO
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Short summary shown in search results.",
      group: "seo",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Used in <title> tag.",
      group: "seo",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.max(160),
      group: "seo",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "seo",
    },
    {
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: { hotspot: true },
      group: "seo",
    },
    {
      name: "structuredData",
      title: "Structured Data (JSON-LD)",
      type: "text",
      group: "seo",
    },

    // ARTICLE BODY — Updated with table + custom HTML support
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        { type: "table" },           // From @sanity/table plugin
        { type: "customHtml" },      // ← Added for raw/custom HTML embeds
      ],
    },

    // NEW — 👍 LIKES
    {
      name: "likes",
      title: "Likes",
      type: "number",
      initialValue: 0,
    },

    // NEW — 💬 COMMENTS (with moderation & email)
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "email", type: "string", title: "Email" },
            { name: "comment", type: "text", title: "Comment" },
            { name: "date", type: "datetime", title: "Date" },
            { 
              name: "approved", 
              type: "boolean", 
              title: "Approved?", 
              initialValue: false 
            }
          ]
        }
      ]
    }
  ]
});