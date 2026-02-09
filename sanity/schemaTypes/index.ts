import blogPost from './blogPost'
import homePage from './homePage'
import customHtml from './customHtml'

export const schemaTypes = [
  blogPost,
  homePage,
  customHtml,
  // If you are using the table plugin, you don't add it here, 
  // you add it to the plugins array in sanity.config.ts
]