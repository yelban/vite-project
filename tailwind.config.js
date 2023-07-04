/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx,vue}', //
        './index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Mabry Pro',
                    'Verdana',
                    'Noto Sans TC',
                    'Noto Sans SC',
                    'Noto Sans JP',
                    'Microsoft JhengHei',
                    'Roboto',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
        require('tailwind-children'),
    ],
    // darkMode: 'class',
};
