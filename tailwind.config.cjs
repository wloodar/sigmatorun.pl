const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'primary-yellow': {
                    DEFAULT: '#FEF9EC',
                    50: '#fef9ec',
                    100: '#fbedca',
                    200: '#f7db90',
                    300: '#f3c256',
                    400: '#f0ab2f',
                    500: '#e98b17',
                    600: '#ce6711',
                    700: '#ab4812',
                    800: '#8b3915',
                    900: '#732f14',
                },
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
