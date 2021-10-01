module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			screens: {
				'tab-land': { 'max': '75em' },
				'tab-port': { 'max': '56.25em' },
				'phone': { 'max': '37.5em' },
			},

			colors: {
				cream: '#f6efe8',
				violet: {
					DEFAULT: '#8a588c',
					dark: '#6a326b'
				}
			},

			minHeight: {
				screen: '100vh'
			},

			fontSize: {
				'tab-land': '87.5%',
				'phone': '75%'
			},

			gridTemplateColumns: {
				'small-to-big': '1fr 1.5fr'
			},

			width: {
				'service-description-width-box': '35rem'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
