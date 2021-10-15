import logo from './logo.svg';
import logoTipography from './monada-tipography.png';
import heroImage from './hero-image.png';
import maria from './maria.png';
import reijane from './reijane.png';
import adla from './adla.png';
import bfSolucoes from './sponsors/bf-solucoes.jpeg';
import iam from './sponsors/iam.jpg';
import onovolab from './sponsors/onovolab.jpg';
import predify from './sponsors/predify.svg';
import sancahub from './sponsors/sancahub.png';
import startupSpSebrae from './sponsors/startup-sp-sebrae.jpg';
import zygon from './sponsors/zygon.jpg';
import logoPng from './logo.png';

const ImageURLs = {
	logo,
	logoTipography,

	// TODO - get svg version of the image
	heroImage,

	maria,
	reijane,
	adla,

	sponsors: {
		bfSolucoes,
		iam,
		onovolab,
		predify,
		sancahub,
		startupSpSebrae,
		zygon,
	},

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng,
};

export default ImageURLs;
