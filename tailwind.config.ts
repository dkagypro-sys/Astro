import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { gold:"#d9ad4c", ink:"#17120d" } } },
  plugins: []
};
export default config;