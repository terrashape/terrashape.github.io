import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TerraShape',
			social: {
				github: 'https://github.com/terrashape/trs',
				discord: 'https://discord.gg/terrashape',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						{ label: 'Another Guide', link: '/guides/test/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
