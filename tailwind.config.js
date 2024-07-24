import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            transitionProperty: {
                'width': 'width',
            },
            colors: {
                "primary": "#9ad6ff",
                "on-primary": "#00344c",
                "secondary": "#a1ccea",
                "on-secondary": "#00344c",
                "tertiary": "#edc2ff",
                "on-tertiary": "#4f0573",
                "error": "#ffb4ab",
                "on-error": "#690005",
                "primary-container": '#00b1f5',
                "on-primary-container": "#001e2d",
                "secondary-container": "#11425b",
                "on-secondary-container": "#acd7f5",
                "tertiary-container": "#d28cf6",
                "on-tertiary-container": "#33004d",
                "surface": "#141414",
                "dim-surface": "#242424",
                "on-surface": "#dee3e9",
                "cs-primary-container": "#f39d0f",
                "cs-on-primary-container": "#371f00",
                "wie-primary-container": "#4c0462",
                "wie-on-primary-container": "#ffffff",
                "cis-primary-container": "#003e3e",
                "cis-on-primary-container": "#98d1d0",
                "grss-primary-container": "#2c8364",
                "grss-on-primary-container": "#ffffff",
            },
        },
    },
    plugins: [
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }), // this is actual CSS
                },
                {values: theme('translate'), supportsNegativeValues: true}
            )
        })
    ],
}

