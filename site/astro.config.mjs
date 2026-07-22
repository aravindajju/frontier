// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://aravindajju.github.io',
	base: '/frontier',
	integrations: [
		starlight({
			title: 'Frontier',
			description: 'An opinionated method for Forward Deployed Engineering.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/aravindajju/frontier' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Manifesto', slug: 'manifesto' },
				{ label: 'The Guide', items: [{ autogenerate: { directory: 'guide' } }] },
				{ label: 'The Book', items: [{ autogenerate: { directory: 'book' } }] },
			],
		}),
	],
});
