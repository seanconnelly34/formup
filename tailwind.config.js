const Themes = require('./styles/themes');
const CurrentTheme = Themes['light'];
/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./containers/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'dashboard-selected':
					'linear-gradient(90deg, rgb(94, 158, 255, 0.3) 5%, rgba(177, 116, 255, 0) 30%)',
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				ralewayLight: ['Raleway-Light', 'sans-serif'],
				ralewayMed: ['Raleway-Medium', 'sans-serif'],
				ralewayBold: ['Raleway-Bold', 'sans-serif'],
				ralewayXBold: ['Raleway-ExtraBold', 'sans-serif'],
			},
			colors: CurrentTheme.color,
			boxShadow: {
				gridHover: '0px 0px 19px 5px rgba(0,0,0,0.86)',
				column: '0px 0px 9px 0px rgba(0,0,0,0.1)',
				preview: '0px 0px 4px 0px rgba(0,0,0,0.1)',
			},
		},
	},
	plugins: [],
};
