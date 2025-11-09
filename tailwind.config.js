/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'gilroy-extra-bold': ['Gilroy-ExtraBold', 'sans-serif'],
                'gilroy': ['Gilroy-ExtraBold'],
            },
        },
    },
    plugins: [],
}