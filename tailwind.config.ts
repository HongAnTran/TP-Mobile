import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    // Các lớp cho tất cả kích thước màn hình
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
    'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12',

    // Lớp cho kích thước màn hình nhỏ (sm)
    'sm:grid-cols-1', 'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:grid-cols-4', 'sm:grid-cols-5',
    'sm:grid-cols-6', 'sm:grid-cols-7', 'sm:grid-cols-8', 'sm:grid-cols-9', 'sm:grid-cols-10',
    'sm:grid-cols-11', 'sm:grid-cols-12',

    // Lớp cho kích thước màn hình vừa (md)
    'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5',
    'md:grid-cols-6', 'md:grid-cols-7', 'md:grid-cols-8', 'md:grid-cols-9', 'md:grid-cols-10',
    'md:grid-cols-11', 'md:grid-cols-12',

    // Lớp cho kích thước màn hình lớn (lg)
    'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5',
    'lg:grid-cols-6', 'lg:grid-cols-7', 'lg:grid-cols-8', 'lg:grid-cols-9', 'lg:grid-cols-10',
    'lg:grid-cols-11', 'lg:grid-cols-12',

    // Lớp cho kích thước màn hình rất lớn (xl)
    'xl:grid-cols-1', 'xl:grid-cols-2', 'xl:grid-cols-3', 'xl:grid-cols-4', 'xl:grid-cols-5',
    'xl:grid-cols-6', 'xl:grid-cols-7', 'xl:grid-cols-8', 'xl:grid-cols-9', 'xl:grid-cols-10',
    'xl:grid-cols-11', 'xl:grid-cols-12',

    // Lớp cho kích thước màn hình cực lớn (2xl)
    '2xl:grid-cols-1', '2xl:grid-cols-2', '2xl:grid-cols-3', '2xl:grid-cols-4', '2xl:grid-cols-5',
    '2xl:grid-cols-6', '2xl:grid-cols-7', '2xl:grid-cols-8', '2xl:grid-cols-9', '2xl:grid-cols-10',
    '2xl:grid-cols-11', '2xl:grid-cols-12'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1220px",
      },
    },
    extend: {
      zIndex: {
        header: "49"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        cream: "var(--cream)",
        textcolor: "var(--text-color)",
        secondary: {
          DEFAULT: "var(--secondary)",
          // foreground: "var(--secondary",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "modal-up": {
          "0%": { transform: "translate(-50%,-50%)", opacity: "1" },
          "100%": { transform: "translate(-50% , -100%)", opacity: "0" },
        },
        "modal-down": {
          "0%": { transform: "translate(-50% , -100%)", opacity: "0" },
          "100%": { transform: "translate(-50% , -50%)", opacity: "1" },
        },
        wiggle:{
          "0%" : {transform : "rotate(-4deg)"},
          "50%":{transform : "rotate(4deg)"},
          "100%" : {transform : "rotate(-4deg)"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "modal-up": "modal-up 0.3s   ",
        "modal-down": "modal-down 0.3s ",
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config