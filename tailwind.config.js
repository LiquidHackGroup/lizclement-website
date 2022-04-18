module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				faintGray: '#F1F1F1',
				gold: {
					600: '#B49105',
				},
				black: {
					600: '#000000',
				},
				red: {
					600: '#E72C48',
				},
				glass: {
					300: '#252324', // glossy black color code
				},
			},
			screens: {
				md: '872px', // ipad mini & ipad air responsive
			},
		},
	},
	plugins: [],
};
