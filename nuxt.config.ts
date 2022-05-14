import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/color-mode',
        '@formkit/nuxt',
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
    ],
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
    },
})
