import { defineField, defineType } from 'sanity'

export const user = defineType({
	name: 'user',
	title: 'User',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'givenName',
			type: 'string',
		}),
		defineField({
			name: 'familyName',
			type: 'string',
		}),
		defineField({
			name: 'imageUrl',
			type: 'url',
		}),
		defineField({
			name: 'email',
			type: 'string',
		}),
		defineField({
			name: 'isEmailVerified',
			type: 'boolean',
		}),
		defineField({
			name: 'provider',
			type: 'string',
		}),
		defineField({
			name: 'providerId',
			type: 'string',
		}),
	],
})
