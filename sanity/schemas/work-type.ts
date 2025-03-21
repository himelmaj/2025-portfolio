import { defineField, defineType } from 'sanity'
import { FileText } from 'lucide-react'

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(99999) ,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt',
          type: 'string',
          validation: Rule => Rule.required(),
        })
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineField({
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: 'alt',
            title: 'Alt',
            type: 'string',
            validation: Rule => Rule.required(),
          })
        ],
      })]
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Catalan', value: 'ca' },
          { title: 'Spanish', value: 'es' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
