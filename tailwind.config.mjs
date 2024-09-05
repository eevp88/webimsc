/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				activate: 'activate 1s linear infinite',  // Animación personalizada
			},
			colors: {
				primary: 'var(--aw-color-primary)',
				secondary: 'var(--aw-color-secondary)',
				accent: 'var(--aw-color-accent)',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
			},
			fontFamily: {
			  sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			  serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
			  heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			},
      keyframes: {
        activate: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

		  }
    }
	},
	darkMode: 'class',
	plugins: [],
}
