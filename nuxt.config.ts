export default defineNuxtConfig({
	typescript: { shim: false }, build: { transpile: ['vuetify'] }, sourcemap: {
		client: false, server: false
	}, modules: ['@nuxt-alt/vuetify', '@kevinmarrec/nuxt-pwa'], vuetify: {
		pluginOptions: { styles: true }, vuetifyOptions: {
			blueprint: 'md3', theme: {
				defaultTheme: 'light'
			}
		}
	}, vite: {
		define: {
			'process.env.DEBUG': false
		}
	}
})