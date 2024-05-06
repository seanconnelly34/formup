const NextDecentrumThemes = {
	light: {
		borderRadius: '8px',
		activeText: {
			color: '#2294ff',
		},
		activeBackground: {
			color: '#fff',
		},
		color: {
			gray: {
				100: '#f8f9fa',
				200: '#e6e6f1',
				300: '#dee2e6',
				400: '#ced4da',
				500: '#adb5bd',
				600: '#6c757d',
				700: '#495057',
				800: '#343a40',
				900: '#212529',
			},
			blue: {
				100: '#222840',
				900: '#7190c7',
			},
			backgrounds: {
				primary: '#f4f3f7',
				secondary: '#444',
				tertiary: 'hsl(0, 0%, 90%)',
			},
			borders: {
				primary: '#000',
				secondary: '#888',
			},
			foreground: {
				primary: 'white',
				secondary: 'light-grey',
				tertiary: 'white',
				primaryVariant: 'black',
				secondaryVariant: 'gray',
			},
		},
		typography: {
			family: "'Inter', sans-serif",
			size: {
				h1: '1rem',
			},
		},
	},
	dark: {
		borderRadius: '0px',
		activeText: {
			color: '#2294ff',
		},
		activeBackground: {
			color: '#fff',
		},
		color: {
			grey: {
				100: '#f8f9fa',
				200: '#e9ecef',
				300: '#dee2e6',
				400: '#ced4da',
				500: '#adb5bd',
				600: '#6c757d',
				700: '#495057',
				800: '#343a40',
				900: '#212529',
			},
			blue: {
				100: '#5E9EFF',
				200: '#3f82e8',
			},
			red: '#B23030',
			gray: '#A0A0A0',
			blue: { 100: '#3171DE', 200: '#5088DC' },
			green: { 100: '#65B762' },
			backgrounds: {
				accent: '#5E9EFF',
				primary: '#090C10',
				secondary: '#fff',
				tertiary: 'hsl(0, 0%, 90%)',
				hover: '#0F1216',
				content: '#0F1216',
				lightGrey: '#1F2227',
			},
			borders: {
				primary: '#000',
				secondary: '#888',
			},
			foreground: {
				primary: 'white',
				secondary: 'light-grey',
				tertiary: 'white',
				primaryVariant: 'black',
				secondaryVariant: 'gray',
			},
		},
		typography: {
			family: "'Raleway-Light', sans-serif",
			size: {
				h1: '1rem',
			},
		},
	},
};

module.exports = NextDecentrumThemes;
