/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "surface": "#fafdfd",
        "border": "#808080",
        "on-surface": "#191c1d",
        "primary": "#006874",
        "on-primary": "#ffffff",
        "primary-container": "#96f0ff",
        "on-primary-container": "#001f24",
        "cis-primary-color": "#b02d2c",
        "cis-on-primary-color": "#ffffff",
        "cis-primary-container": "#ffdad6",
        "cis-on-primary-container": "#410003",
        "cis-surface": "#fffbff",
        "cis-on-surface": "#201a19",
        "cs-primary": "#676000",
        "cs-on-primary": "#ffffff",
        "cs-primary-container": "#f1e66b",
        "cs-on-primary-container": "#1f1c00",
        "cs-surface": "#fffbff",
        "cs-on-surface": "#1d1c16",
      }
    },
  },
  plugins: [],
}

