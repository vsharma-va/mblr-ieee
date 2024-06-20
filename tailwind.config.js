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
            }
        },
    },
    plugins: [],
}

