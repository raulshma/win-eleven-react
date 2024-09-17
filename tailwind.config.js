/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  //   extend: {
  //     keyframes: {
  //       focusIn: {
  //         "0%": { transform: "scale(0.8)", opacity: "0" },
  //         "100%": { transform: "scale(1)", opacity: "1" },
  //       },
  //       focusOut: {
  //         "0%": { transform: "scale(1)", opacity: "1" },
  //         "100%": { transform: "scale(0.8)", opacity: "0" },
  //       },
  //     },
  //     animation: {
  //       focusIn: "focusIn 0.3s ease-out",
  //       focusOut: "focusOut 0.3s ease-in",
  //     },
  //     borderRadius: {
  //       lg: "12px", // Updated for Windows 11-like rounded corners
  //       md: "10px",
  //       sm: "8px",
  //     },
  //     colors: {
  //       background: "hsl(220, 15%, 95%)", // Soft pastel background for light mode
  //       foreground: "hsl(220, 15%, 10%)", // Dark text for contrast
  //       card: {
  //         DEFAULT: "hsl(0, 0%, 100%)", // White card color
  //         foreground: "hsl(220, 15%, 10%)",
  //       },
  //       popover: {
  //         DEFAULT: "hsl(0, 0%, 100%)", // White popover color with slight transparency
  //         foreground: "hsl(220, 15%, 10%)",
  //       },
  //       primary: {
  //         DEFAULT: "hsl(220, 90%, 56%)", // Windows 11 primary blue color
  //         foreground: "hsl(0, 0%, 100%)",
  //       },
  //       secondary: {
  //         DEFAULT: "hsl(210, 8%, 60%)", // Muted secondary color
  //         foreground: "hsla(0, 0%, 0%, 60.63%)",
  //       },
  //       muted: {
  //         DEFAULT: "hsl(220, 10%, 85%)", // Muted background for disabled or less important elements
  //         foreground: "hsl(220, 15%, 50%)",
  //       },
  //       accent: {
  //         DEFAULT: "hsl(340, 100%, 66%)", // Accent color
  //         foreground: "hsl(0, 0%, 100%)",
  //       },
  //       destructive: {
  //         DEFAULT: "hsl(0, 100%, 60%)", // Red color for destructive actions
  //         foreground: "hsl(0, 0%, 100%)",
  //       },
  //       border: "hsl(220, 15%, 80%)", // Light border color
  //       input: "hsl(220, 15%, 95%)", // Light input background
  //       ring: "hsla(220, 90%, 56%, 0.4)", // Semi-transparent blue ring for focus states
  //       chart: {
  //         1: "hsl(200, 80%, 70%)",
  //         2: "hsl(160, 60%, 50%)",
  //         3: "hsl(50, 90%, 60%)",
  //         4: "hsl(10, 70%, 60%)",
  //         5: "hsl(290, 50%, 60%)",
  //       },
  //     },
  //     boxShadow: {
  //       windows11:
  //         "0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)", // Soft shadow for a floating effect
  //     },
  //     backdropBlur: {
  //       md: "8px", // Blurred effect for glassmorphism
  //     },
  //     backdropBrightness: {
  //       md: "125%", // Slight brightness for frosted glass effect
  //     },
  //   },
  },
  plugins: [require("tailwindcss-animate")],
};
