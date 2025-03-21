import { type SchemaTypeDefinition } from 'sanity'
import { workType } from './work-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workType],
}