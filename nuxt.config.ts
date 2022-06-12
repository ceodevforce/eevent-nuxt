import { defineNuxtConfig } from 'nuxt'
import { generateClasses } from '@formkit/themes'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/color-mode',
        '@formkit/nuxt',
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    formkit: {
        defaultConfig: {
            config: {
                classes: generateClasses({
                    text: {
                        outer: 'mb-5',
                        label: 'block mb-1 font-bold text-sm',
                        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                        input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                        help: 'text-xs text-gray-500',
                        messages: 'list-none p-0 mt-1 mb-0',
                        message: 'text-red-500 mb-1 text-xs'
                    }
                }),
            },
        }
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
    },
})
