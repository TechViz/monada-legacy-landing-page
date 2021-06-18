// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';
import ImageURLs from '../images/image-urls';
import AppContainer from '../containers/_app';
import Services from '../services';
import { deployedURLHome } from '../constants/deployed-url';
import { supportedLanguages } from '../constants/supported-languages';
import { description } from '../constants/basic-page-description';

type MyAppProps = React.PropsWithoutRef<{
	Component: any;
	pageProps: any;
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Favicon related stuff */}
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />

				{/* These meta tags are related to OpenGraph, which allows for better webpage cards. */}
				{/* For more information, visit https://ogp.me/ */}
				<meta property="og:title" content="Mônada" />
				<meta property="og:site_name" content="Mônada" />
				<meta property="og:description" content={description} />
				<meta property="og:locale" content={supportedLanguages[0].replace(/-/g, '_')} />
				{supportedLanguages.slice(1).map(language => (
					<meta property="og:locale:alternate" content={language.replace(/-/g, '_')} />
				))}
				<meta property="og:image" content={`${ImageURLs.logoPng}`} />
				<meta property="og:url" content={deployedURLHome} />
			</Head>

			<FilledThemeProvider>
				<Providers>
					<AppContainer>
						<Services />
						<Component {...pageProps} />
					</AppContainer>
				</Providers>
			</FilledThemeProvider>
		</>
	);
};

export default MyApp;
