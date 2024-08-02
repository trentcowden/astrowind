import type { Config } from 'tailwindcss';
import { colors } from './styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['EudoxusSans', 'IBMPlexSansArabic', 'sans-serif'],
    },
    colors,
  },
} as Config;
