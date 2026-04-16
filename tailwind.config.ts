import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        mist: "#f5f5f4",
        stone: "#e7e5e4",
        point: "#6b7280"
      },
      maxWidth: {
        content: "720px"
      }
    }
  },
  plugins: []
};

export default config;
