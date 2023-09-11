import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://algorithms-of-the-mind.netlify.app",
	server: {
		host: "0.0.0.0",
		port: 4261,
	},
	integrations: [
		starlight({
			title: "Algorithms of the Mind",
			social: {
				github: "https://github.com/cnclgithub/algorithms-of-the-mind",
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: "guides" },
				},
				{ label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
