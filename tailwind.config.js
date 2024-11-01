import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'pattern': "url('/pattern.png')",
            },
            colors: {
                'jinawi': {
                    'primary': '#0E7C7B',
                    'secondary': '#292F36',
                    'accent': '#DCF0F0'
                },
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '968px',
            xl: '1024px',
            '2xl': '1280px',
        }
    },

    plugins: [forms],
};
