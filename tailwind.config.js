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
                "cs-primary-container": "#c94c00",
                "cs-on-primary-container": "#ffffff",
                "wie-primary-container": "#c60fc7",
                "wie-on-primary-container": "#ffffff",
                "cis-primary-container": "#fbd426",
                "cis-on-primary-container": "#4e4000",
                "grss-primary-container": "#adff45",
                "grss-on-primary-container": "#325400",
            }
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

