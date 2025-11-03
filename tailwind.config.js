/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00b67f",
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6",
        "secondary-foreground": "#000000",
        accent: "#00b67f",
        "accent-foreground": "#ffffff",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        background: "#ffffff",
        foreground: "#000000",
        card: "#ffffff",
        "card-foreground": "#000000",
        muted: "#f3f4f6",
        "muted-foreground": "#6b7280",
        border: "#e5e7eb",
        "sidebar-border": "#e5e7eb",
        input: "#e5e7eb",
        ring: "#00b67f",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Satoshi", "sans-serif"],
      },
      borderRadius: {
        custom: "1rem",
      },
    },
  },
  plugins: [],
};
