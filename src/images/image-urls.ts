const ImageURLs = {
	logo: require(`./logo.svg`),

	// TODO - get svg version of the image
	heroImage: require(`./hero-image.png`),

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng: require(`./logo.png`),
};

export default ImageURLs;
