import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { table } from "@sanity/table";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "karoldigital_studio",
  title: "Karol Digital CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool(),
    visionTool(),
    table(),
  ],
});
