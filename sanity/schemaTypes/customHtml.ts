import { defineType } from "sanity";

export default defineType({
  name: "customHtml",
  title: "Custom HTML",
  type: "object",
  fields: [
    {
      name: "html",
      title: "HTML Code",
      type: "text",
    },
  ],
});