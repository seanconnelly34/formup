import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'jqptd4',

	env: {
		base_url: 'http://localhost:3000/',
		server_url: 'http://localhost:8000/',
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
