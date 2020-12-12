import { ThemeProvider, DefaultTheme } from 'styled-components';

type HoverableShadow = {
	normal: string,
	hover: string,
	active: string,
}

type AllScreenSizes = {
	mobileS: string,
	mobileM: string,
	mobileL: string,
	tablet: string,
	laptop: string,
	laptopL: string,
	uhd: string,
}

declare module "styled-components" {
  export interface DefaultTheme {
		colors: {
			primary: {
				main: string,
				white: string,
				black: string,
				dark: string,
				light: string,
			},
			secondary: {
				main: string,
				white: string,
				dark: string,
				light: string,
			},
			action: {
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
				large: {
					soft: HoverableShadow,
					strong: HoverableShadow,
				},
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
			minScreen: AllScreenSizes,
			maxScreen: AllScreenSizes,
			minScreenPlusOne: AllScreenSizes,
			maxScreenPlusOne: AllScreenSizes,
			minScreenMinusOne: AllScreenSizes,
			maxScreenMinusOne: AllScreenSizes,
		},
		zindex:  {
			backgroundImage: number,
	 		navbar: number,
		},
  }
}

const theme: DefaultTheme = {
	colors: {
		primary: {
			main: '#6a27c1',
			white: '#F1EBF9',
			black: '#130723',
			dark: '#3A1569',
			light: '#AE89DD',
		},
		secondary: {
			main: '#008AD1',
			dark: '#00245D',
			light: '#80c5e8',
			white: '#F2FAFF',
		},
		action: {
			main: '#F3711B',
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
			large: {
				soft: {
					normal: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
					active: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
					hover: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
				},
				strong: {
					normal: '-3px 3px 12px rgba(0, 0, 0, 0.2)',
					active: '-2px 2px 6px rgba(0, 0, 0, 0.3)',
					hover: '-6px 6px 22px rgba(0, 0, 0, 0.1)',
				},
			},
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
		maxScreenMinusOne: {
			mobileS: '@media screen and (max-width: 319px)',
			mobileM: '@media screen and (max-width: 374px)',
			mobileL: '@media screen and (max-width: 424px)',
			tablet: '@media screen and (max-width: 767px)',
			laptop: '@media screen and (max-width: 1023px)',
			laptopL: '@media screen and (max-width: 1439px)',
			uhd: '@media screen and (max-width: 2559px)',
		},
		minScreenMinusOne: {
			mobileS: '@media screen and (min-width: 319px)',
			mobileM: '@media screen and (min-width: 374px)',
			mobileL: '@media screen and (min-width: 424px)',
			tablet: '@media screen and (min-width: 767px)',
			laptop: '@media screen and (min-width: 1023px)',
			laptopL: '@media screen and (min-width: 1439px)',
			uhd: '@media screen and (min-width: 2559px)',
		},
		minScreenPlusOne: {
			mobileS: '@media screen and (min-width: 321px)',
			mobileM: '@media screen and (min-width: 376px)',
			mobileL: '@media screen and (min-width: 426px)',
			tablet: '@media screen and (min-width: 769px)',
			laptop: '@media screen and (min-width: 1025px)',
			laptopL: '@media screen and (min-width: 1441px)',
			uhd: '@media screen and (min-width: 2561px)',
		},
		maxScreenPlusOne: {
			mobileS: '@media screen and (max-width: 321px)',
			mobileM: '@media screen and (max-width: 376px)',
			mobileL: '@media screen and (max-width: 426px)',
			tablet: '@media screen and (max-width: 769px)',
			laptop: '@media screen and (max-width: 1025px)',
			laptopL: '@media screen and (max-width: 1441px)',
			uhd: '@media screen and (max-width: 2561px)',
		},
	},
	zindex:  {
		backgroundImage: -1,
		navbar: 10,
	},
};

function FilledThemeProvider ({ ...props }) {
	return <ThemeProvider theme={theme} {...props} />
}

export default FilledThemeProvider;