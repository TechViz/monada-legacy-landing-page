const ImageURLS = {
	logo: {
		/**
		* The PNG versions of the logo exist to use with the OpenGraph meta tags, because they don't support SVG.
		* These images SHOULD NOT be used in the website itself, as the svg version is lighter, and therefore preferable.
		*/
		png: {
			main: require('./logo/png/main.png'),
			textless: require('./logo/png/textless.png'),
		},
		main: require('./logo/main.svg'),
		textless: require('./logo/textless.svg'),
		text: require('./logo/text.svg'),
	},
	icons: {
		gift: require('./icons/gift.svg'),
		facebook: require('./icons/facebook.svg'),
		instagram: require('./icons/instagram.svg'),
		linkedin: require('./icons/linkedin.svg'),
		youtube: require('./icons/youtube.svg'),
		sunshine: require('./icons/sunshine.svg'),
	},
	founders: {
		adla: require('./founders/adla.jpg'),
		maria: require('./founders/maria.jpg'),
		reijane: require('./founders/reijane.jpg'),
	},
};

export default ImageURLS;