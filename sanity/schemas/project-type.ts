import { defineField, defineType } from 'sanity'
import { FileText } from 'lucide-react';


export const projectType = defineType({
    name: 'project',
    title: 'Project',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
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
    ],
})
