
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

/**
 * Fetches the page's global styles, that will be directly injected into the HTML.
 * This CSS file was imported like this to prevent a chaning dependency when first
 * downloading the web page.
 */
export function getFontFamiliesStyle() {
	const fs = require('fs');

	// The file containing the global styles.
	const fontText = fs.readFileSync('src/global-css.css', { encoding: 'utf8' });

	// The CSS file is not minified. This is to remove all unnecessary whitespaces
	// so the client won't have to download crap. This maaaay break things, be careful.
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
			// Fetch global CSS styles
			const fontFamilies = getFontFamiliesStyle();
			return {
				...initialProps,
				styles: (
					<>
						{/* Since the text from 'fontFamilies' comes from one of our files, we can
						trust it's contents, and use the dangerouslySetInnerHTML prop. */}
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