// @ts-ignore
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
		typescript: {shim: false}, build: {transpile: ['vuetify']}, sourcemap: {
				client: false, server: false
		}, modules: ['@kevinmarrec/nuxt-pwa', async (options, nuxt) => {
				nuxt.hooks.hook('vite:extendConfig', (config) => // @ts-ignore
					config.plugins.push(vuetify({

							styles: {configFile: 'assets/variables.scss'}

					})))
		}], vite: {
				define: {
						'process.env.DEBUG': false
				}
		}, app: {
				head: {
						title: '', meta: [{charset: 'utf-8'}, {
								name: 'viewport', content: 'width=device-width, initial-scale=1'
						}, {hid: 'description', name: 'description', content: ''}, {
								name: 'format-detection', content: 'telephone=no'
						}], link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
				}
		}
})