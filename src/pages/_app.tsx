// Framework
import React, { FC } from 'react';
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
import { ToastContainer } from 'react-toastify';

const MyApp: FC<{
	Component: any;
	pageProps: any;
}> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Favicon related stuff */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

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
						<ToastContainer hideProgressBar />
						<Component {...pageProps} />
					</AppContainer>
				</Providers>
			</FilledThemeProvider>
		</>
	);
};

export default MyApp;
