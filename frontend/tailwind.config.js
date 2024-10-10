/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "system-primary-color": "#830823",
              "white": "#fff",
              "system-red": "#ff0000"
          },
          "spacing": {},
          "fontFamily": {
              "nav-text": "Ciutadella"
          },
          "borderRadius": {
              "17xl": "36px"
          }
      },
      "fontSize": {
          "sm": "14px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}