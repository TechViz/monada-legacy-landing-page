/**
 * Colors with a gradient. Allows for multiple shades of the same color.
 */
type GradientColor = {
	main: string;
	light: string;
	lighter: string;
	dark: string;
	darker: string;
};

export type DefaultThemeColors = {
	primary: GradientColor;
	yellow: GradientColor;
	orange: GradientColor;
	pink: GradientColor;
	green: GradientColor;
	blue: GradientColor;

	success: GradientColor;
	error: GradientColor;
	warning: GradientColor;

	/** Useful if you have lots of gray colors in your app, and want to have
	 * consistency between them. */
	gray: GradientColor;

	white: {
		background: string;
		/** full white is the #FFFFFF color */
		full: string;
	};
};

const EMPTY_COLOR = `#EEEEEE`;

export const DefaultThemeColors = {
	primary: {
		main: '#9623E4',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	yellow: {
		main: '#FFB800',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	orange: {
		main: '#FF7201',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	pink: {
		main: '#EF1466',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	green: {
		main: '#00B33E',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	blue: {
		main: '#008AD4',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: '#A7AEDB',
		lighter: EMPTY_COLOR,
	},
	gray: {
		light: `#C4C4C4`,
		lighter: `#eeeeee`,
		main: EMPTY_COLOR,
		dark: '#666666',
		darker: EMPTY_COLOR,
	},
	white: {
		background: `#eeeeee`,
		full: `white`,
	},

	// Material UI's default success colors.
	success: {
		lighter: `#a7d7a9`,
		light: `#81c784`,
		main: `#4caf50`,
		dark: `#388e3c`,
		darker: EMPTY_COLOR,
	},

	// Material UI's default error colors.
	error: {
		lighter: `#eb9393`,
		light: `#e57373`,
		main: `#f44336`,
		dark: `#d32f2f`,
		darker: EMPTY_COLOR,
	},

	// Material UI's default warning colors.
	warning: {
		lighter: EMPTY_COLOR,
		light: `#ffb74d`,
		main: `#ff9800`,
		dark: `#f57c00`,
		darker: EMPTY_COLOR,
	},
} as DefaultThemeColors;
