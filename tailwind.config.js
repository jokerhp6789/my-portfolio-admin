const ratioPlugin = require("@tailwindcss/aspect-ratio");

module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-light": "rgba(228,236,236)",
                primary: "#4D7E7F",
                theme: "#4D7E7F",
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [ratioPlugin],
};
