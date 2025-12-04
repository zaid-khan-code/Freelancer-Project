/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                redhat: ['"Red Hat Display"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}