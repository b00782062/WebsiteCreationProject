export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/finance.svelte"),
	() => import("../../src/routes/podcast.svelte"),
	() => import("../../src/routes/essec.svelte"),
	() => import("../../src/routes/posts.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"contact": [[0, 3], [1]],
	"finance": [[0, 4], [1]],
	"podcast": [[0, 5], [1]],
	"essec": [[0, 6], [1]],
	"posts": [[0, 7], [1]]
};