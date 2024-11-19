import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import blog from './schemaTypes/blog'
import author from './schemaTypes/author'
import teamPortfolio from './schemaTypes/teamPortfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, category, blockContent, teamPortfolio],
}
