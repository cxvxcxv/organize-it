import type { Config } from 'tailwindcss';

import { COLORS } from './src/constants/color.constants';
import { SPACING } from './src/constants/spacing.constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: COLORS,
    extend: {
      spacing: SPACING,
    },
  },
  plugins: [],
};
export default config;
