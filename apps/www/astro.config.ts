import process from "node:process";

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import aws from "@astro-aws/adapter";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";

const isSSR = process.env.SSR_BUILD === "true";

// https://astro.build/config
export default defineConfig({
	adapter: isSSR
		? aws({
				esm: true,
		  })
		: undefined,
	integrations: [tailwind(), mdx(), sitemap()],
	markdown: {
		extendDefaultPlugins: true,
		remarkPlugins: [remarkToc],
	},
	outDir: isSSR ? "dist/server" : "dist/static",
	output: isSSR ? "server" : "static",
	site: `https://astro-aws.org/`,
});
