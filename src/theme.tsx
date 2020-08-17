import { ThemeProvider, DefaultTheme } from 'styled-components';

type HoverableShadow = {
	normal: string,
	hover: string,
	active: string,
}

declare module "styled-components" {
  export interface DefaultTheme {
		colors: {
			primary: {
				main: string,
				white: string,
			},
			secondary: {
				main: string,
			},
			success: {
				lighter: string,
				light: string,
				normal: string,
				dark: string,
			},
			error: {
				lighter: string,
				light: string,
				normal: string,
				dark: string,
			},
			warning: {
				light: string,
				normal: string,
				dark: string,
			},
			gray: {
				light: string,
				lighter: string,
			},
		},
		font: {
			size: {
				normal: string,
				large: string,
			},
		},
		shadows: {
			/** Layout shadows are shadows related to things like cards, the navbar, etc...
			* These shadows are usually larger and more subtle*/
			layout: {
				large: string,
			},
			button: {
				small: HoverableShadow,
				medium: HoverableShadow,
				large: HoverableShadow,
			},
			icons: {
			},
		},
		mediaQueries: {
			minScreen: {
				mobileS: string,
				mobileM: string,
				mobileL: string,
				tablet: string,
				laptop: string,
				laptopL: string,
				uhd: string,
			}
			maxScreen: {
				mobileS: string,
				mobileM: string,
				mobileL: string,
				tablet: string,
				laptop: string,
				laptopL: string,
				uhd: string,
			}
		},
  }
}

const theme: DefaultTheme = {
	colors: {
		primary: {
			main: '#6a27c1',
			white: '#F1EBF9',
		},
		secondary: {
			main: '#98fb98',
		},
		gray: {
			light: '#dddddd',
			lighter: '#eeeeee',
		},
		success: {
			lighter: '#a7d7a9',
			light: '#81c784',
			normal: '#4caf50',
			dark: '#388e3c',
		},
		error: {
			lighter: '#eb9393',
			light: '#e57373',
			normal: '#f44336',
			dark: '#d32f2f',
		},
		warning: {
			light: '#ffb74d',
			normal: '#ff9800',
			dark: '#f57c00',
		},
	},
	font: {
		size: {
			normal: '16px',
			large: '24px',
		},
	},
	shadows: {
		layout: {
			large: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
		},
		button: {
			small: {
				hover: '-3px 3px 3px rgba(0, 0, 0, 0.1)',
				normal: '-2px 2px 2px rgba(0, 0, 0, 0.2)',
				active: '-1px 1px 1px rgba(0, 0, 0, 0.4)',
			},
			medium: {
				hover: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
				normal: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
				active: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
			},
			large: {
				hover: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
				normal: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
				active: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
			},
		},
		icons: {
		},
	},
	mediaQueries: {
		minScreen: {
			mobileS: '@media screen and (min-width: 320px)',
			mobileM: '@media screen and (min-width: 375px)',
			mobileL: '@media screen and (min-width: 425px)',
			tablet: '@media screen and (min-width: 768px)',
			laptop: '@media screen and (min-width: 1024px)',
			laptopL: '@media screen and (min-width: 1440px)',
			uhd: '@media screen and (min-width: 2560px)',
		},
		maxScreen: {
			mobileS: '@media screen and (max-width: 320px)',
			mobileM: '@media screen and (max-width: 375px)',
			mobileL: '@media screen and (max-width: 425px)',
			tablet: '@media screen and (max-width: 768px)',
			laptop: '@media screen and (max-width: 1024px)',
			laptopL: '@media screen and (max-width: 1440px)',
			uhd: '@media screen and (max-width: 2560px)',
		},
	},
};

function FilledThemeProvider ({ ...props }) {
	return <ThemeProvider theme={theme} {...props} />
}

export default FilledThemeProvider;