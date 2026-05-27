export const themeConfig = {
	colors: {
		primary: '#0069FF',
		primaryDark: '#0051CC',
		accent: '#00C2A8',
		neutral: {
			50: '#F9FAFB',
			100: '#F3F4F6',
			200: '#E5E7EB',
			300: '#D1D5DB',
			500: '#6B7280',
			700: '#374151',
		},
		success: '#10B981',
		warning: '#F59E0B',
		danger: '#EF4444',
	},
	typography: {
		fontFamilySans: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
		headingWeight: 700,
		bodyWeight: 400,
		sizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
		},
	},
	spacing: {
		px: '1px',
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
		'2xl': '3rem',
	},
	radii: {
		sm: '6px',
		md: '10px',
		lg: '16px',
		full: '9999px',
	},
	shadows: {
		sm: '0 1px 2px rgba(16,24,40,0.05)',
		md: '0 4px 12px rgba(16,24,40,0.08)',
		lg: '0 24px 40px rgba(16,24,40,0.12)',
	},
	motion: {
		duration: {
			short: 150,
			base: 300,
			long: 600,
		},
		easing: {
			standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
			expressive: 'cubic-bezier(0.16, 1, 0.3, 1)',
		},
	},
}
