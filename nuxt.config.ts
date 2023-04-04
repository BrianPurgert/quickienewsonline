// @ts-ignore
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
		typescript: {shim: false}, build: {transpile: ['vuetify']}, sourcemap: {
				client: false, server: false
		}, modules: ['@kevinmarrec/nuxt-pwa', async (options, nuxt) => {
				// @ts-ignore
				nuxt.hooks.hook('vite:extendConfig', (config) => {
						// @ts-ignore
						return config.plugins.push(vuetify({
								styles: {configFile: 'assets/variables.scss'}

						}))
				})
		}], vite: {
				define: {
						'process.env.DEBUG': false
				}
		}
})