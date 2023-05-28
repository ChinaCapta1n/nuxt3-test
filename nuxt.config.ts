// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/index.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/i18n'],
    i18n: {
        locales: ['tc', 'en'],
        strategy: 'prefix',
        defaultLocale: 'tc',
    }
})
