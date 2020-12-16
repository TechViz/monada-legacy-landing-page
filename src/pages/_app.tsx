// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';
import AppContainer from '../containers';
import deployedUrl from '../constants/deployed-url';
import ImageURLS from '../images';

type MyAppProps = React.PropsWithoutRef<{
	Component: any,
	pageProps: any,
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
  return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700;900&display=swap" rel="stylesheet" />
				{/* Global styling */}
				<style>{`
					body, html, #__next {
						height: 100%;
						margin: 0;
						font-family: 'Roboto', sans-serif;
					}
					* {
						box-sizing: border-box;
					}
				`.replace(/\s/g, '')}</style>

				{/* Favicon related stuff */}
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />

				{/* These meta tags are related to OpenGraph, which allows for your better webpage cards. */}
				<meta property='og:title' content='Mônada - D&I Analytics' />
				<meta property='og:site-name' content='Mônada' />
				<meta property='og:description' content='Atuamos para gerar oportunidades de impacto, aumento de produtividade, eficiência, desempenho e lucratividade através do gerenciamento de métricas de Diversidade, Equidade e Inclusão em empresas.' />
				<meta property='og:image' content={`${deployedUrl}${ImageURLS.logo.png.main}`} />
			</Head>

			<FilledThemeProvider>
				<Providers>
					<AppContainer>
						<Component {...pageProps} />
					</AppContainer>
				</Providers>
			</FilledThemeProvider>
		</>
	);
}

export default MyApp