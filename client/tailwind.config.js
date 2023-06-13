/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {},
        fontSize: {
            "mobile": "16px"
        },
        maxWidth: {
            xs: "360px"
        },
        backgroundColor: {
            "main": "#242424",
            "detail": "#804DC1"
        },
        textColor: {
            "detail": "#804DC1",
            "white": "#FFF",
            "gray": "#939393"
        }
    },
    plugins: [],
}