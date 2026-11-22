import type { Config } from "tailwindcss";
import { theme } from "./src/lib/theme";

export default {
  theme: {
    extend: {
      colors: {
        canvas: theme.canvas,
        surface: theme.surface,
        border: theme.border,
        primary: theme.textPrimary,
        secondary: theme.textSecondary,
        accent: theme.accent,
        "accent-soft": theme.accentSoft,
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
    },
  },
} satisfies Config;
