import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-inter)'
  			],
  			mono: [
  				'var(--font-geist-mono)'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'turquoise-50': '#f1f9fa',
  			'turquoise-100': '#dcf1f1',
  			'turquoise-200': '#bce2e5',
  			'turquoise-300': '#7fc5cc',
  			'turquoise-400': '#59adb7',
  			'turquoise-500': '#3d919d',
  			'turquoise-600': '#357785',
  			'turquoise-700': '#31626d',
  			'turquoise-800': '#2f525b',
  			'turquoise-900': '#2b464e',
  			'turquoise-950': '#182d34',
  			'pinklet-50': '#fef2f3',
  			'pinklet-100': '#ffe1e4',
  			'pinklet-200': '#ffc0c6',
  			'pinklet-300': '#fea3ac',
  			'pinklet-400': '#fb6e7b',
  			'pinklet-500': '#f24152',
  			'pinklet-600': '#e02234',
  			'pinklet-700': '#bc1929',
  			'pinklet-800': '#9b1925',
  			'pinklet-900': '#811b25',
  			'pinklet-950': '#46090f',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		scale: {
  			'100': '1'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("@tailwindcss/typography"),
      require("tailwindcss-animate")
],
} satisfies Config;
