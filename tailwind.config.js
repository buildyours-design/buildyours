/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bosch: ["var(--bosch)"],
        grotesk: ["var(--grotesk)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "gradient-background":
          "linear-gradient(60deg,rgb(var(--background-start)),rgb(var(--background-end)) 10%)",
        "gradient-primary": "linear-gradient(#3c3b3f,#605c3c)",
        "gradient-secondary":
          "radial-gradient(circle at center center, rgb(71,71,71),rgb(8,8,8))",
        "gradient-card":
          "linear-gradient(160deg,hsl(var(--card)) 0%, hsl(var(--card-foreground)) 80%)",
        "gradient-card-left":
          "linear-gradient(160deg,hsl(var(--card-left)) 0%, hsl(var(--card-foreground-left)) 80%)",
        "project-image": "url('/assets/bg001.jpg')",
        "new-image": "url('/assets/bg003.jpg')",
        "image-project": "url('/assets/bg002.jpg')",
        "presentation-card":
          "radial-gradient(circle,rgba(34, 4, 48, 1) 13%, rgba(33, 3, 3, 1) 100%)",
        "image-background": "url('/assets/image23.jpg')",
        "last-background": "url('/assets/bg004.jpg')",
        "form-image": "url('/assets/image004.jpg')",
        "presentation-card-left":
          "radial-gradient(circle,rgba(79, 13, 40, 1) 0%, rgba(0, 0, 0, 1) 100%)",
      },
      screens: {
        sxs: "350px",
        xs: "450px",
        sm: "720px",
        md: "992px",
        lg: "1280px",
        xl: "1480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
