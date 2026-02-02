import { defineType } from "sanity";

export default defineType({
  name: "customHtml",
  title: "Custom HTML",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title (optional - for editor reference)",
      type: "string",
      description: "A label to identify this HTML block in the editor (not displayed on frontend)",
    },
    {
      name: "html",
      title: "HTML Code",
      type: "text",
      description: "Paste raw HTML here (e.g., <iframe>, <div>, custom embeds). Be careful with scripts for security.",
      rows: 10,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection: any) {
      return {
        title: selection.title || "Custom HTML (no title)",
      };
    },
  },
});