const ImageURLs = {
	logo: require(`./logo.svg`),
	logoTipography: require(`./monada-tipography.png`),

	// TODO - get svg version of the image
	heroImage: require(`./hero-image.png`),

	maria: require(`./maria.png`),
	reijane: require(`./reijane.png`),
	adla: require(`./adla.png`),

	sponsors: {
		bfSolucoes: require('./sponsors/bf-solucoes.jpeg'),
		iam: require('./sponsors/iam.jpg'),
		onovolab: require('./sponsors/onovolab.jpg'),
		predify: require('./sponsors/predify.svg'),
		sancahub: require('./sponsors/sancahub.png'),
		startupSpSebrae: require('./sponsors/startup-sp-sebrae.jpg'),
		zygon: require('./sponsors/zygon.jpg'),
	},

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng: require(`./logo.png`),
};

export default ImageURLs;
