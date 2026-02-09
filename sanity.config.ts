import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { table } from '@sanity/table'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  // 1. ADD THIS LINE - It must match your folder name in Next.js
  basePath: '/studio', 

  name: 'default',
  title: 'Karol Digital',
  projectId: 'pols4r9z',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ]),
    }),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})