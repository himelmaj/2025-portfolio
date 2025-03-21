'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, defineField } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemas'
import { structure } from '@/sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'


const languages = [
  {id: 'en', title: 'English'},
  {id: 'ca', title: 'Catalan'},
  {id: 'es', title: 'Spanish'},
];


const documentTypes = ['work'];

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: documentTypes,
      weakReferences: true,
      languageField: `language`,
      bulkPublish: true,
      metadataFields: [
        defineField({ name: 'slug', type: 'slug' }),
      ],
      allowCreateMetaDoc: true,
      
    }),
  ],
})
