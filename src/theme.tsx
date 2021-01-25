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

type ColorVariations = {
	main: string,
};

declare module "styled-components" {
  export interface DefaultTheme {
		colors: {
			purple: ColorVariations,
			yellow: ColorVariations,
			orange: ColorVariations,
			pink: ColorVariations,
			green: ColorVariations,
			blue: ColorVariations,
			gray: ColorVariations,
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
			navbar: string, // Cannot "hover" the navbar.
			card: HoverableShadow,
			button: HoverableShadow,
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
		spacing: {
			horizontalPadding: string,
			navbarHeight: string,
		},
		zindex:  {
			backgroundImage: number,
	 		navbar: number,
		},
  }
}

const theme: DefaultTheme = {
	colors: {
		purple: {
			main: '#9623E4',
		},
		yellow: {
			main: '#FFB800',
		},
		orange: {
			main: '#FF7201',
		},
		pink: {
			main: '#EF1466',
		},
		green: {
			main: '#00B33E',
		},
		blue: {
			main: '#008AD4',
		},
		gray: {
			main: '#EEEEEE',
		},
	},
	font: {
		size: {
			normal: '16px',
			large: '24px',
		},
	},
	shadows: {
		navbar: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
		card: {
			normal: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
			active: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
			hover: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
		},
		button: {
			hover: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
			normal: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
			active: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
		},
		icons: {
		},
	},
	spacing: {
		horizontalPadding: '86px',
		navbarHeight: '58px',
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