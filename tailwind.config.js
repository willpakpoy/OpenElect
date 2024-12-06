/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
import daisyui from "daisyui"
export default {
  content: ["./templates/**/*.tmpl"],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
      daisyui,
  ],
}

