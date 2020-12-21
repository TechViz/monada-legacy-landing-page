
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

/**
 * This function doesn't fetch the actual fonts, but the string that should be in
 * inside a <style> tag, which will then import the fonts. The given method by the
 * Google website first fetches the CSS, and then it fetches the font. This is
 * painfully slow. So I made this function to fetch the CSS in build time, and so
 * the page only has to fetch the actual fonts.
 *
 * @returns A text that should go inside a <style> tag, which will fetch the actual fonts.
 */
export async function getFontFamiliesStyle() {
	// This is the Roboto font.
	// This font was found here: https://fonts.google.com/specimen/Roboto
	const response = await fetch('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
	const fontText = await response.text();

	if (!fontText) {
		// If you hit this error, then the fonts link is probably broken.
		// Maybe finding a new link will fix this?
		throw new Error('I NEED THE FONTS TO BUILD'); // Screams of pain
	}

	// The CSS font text is not minified. This is to remove all unnecessary whitespaces
	// so the client won't have to download crap.
	return fontText.replace(/\s/g, '');
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			// Fetch all font families needed for the page.
			const fontFamilies = await getFontFamiliesStyle();
			return {
				...initialProps,
				styles: (
					<>
						{/* This is a bit awkward, but since this is just a style tag,
						and we can probably trust Google, then it's not a big problem */}
						<style dangerouslySetInnerHTML={{ __html: fontFamilies }} />
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render () {
		return (
			// The `og` prefix is to allow for OpenGraph tools to read info from the site
			<Html lang='pt-br' prefix="og: http://ogp.me/ns#">
			<Head>
				<meta name="description" content="Site oficial da empresa Mônada" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			</Html>
		)
	}
}