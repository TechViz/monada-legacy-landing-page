// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';

type MyAppProps = React.PropsWithoutRef<{
	Component: any,
	pageProps: any,
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
  return (
		<>
			<Head>
				{/* Global styling */}
				<style>{`
					body, html, #__next {
						height: 100%;
						margin: 0;
					}
					* {
						box-sizing: border-box;
					}
				`}</style>

				{/* Favicon related stuff */}
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			</Head>

			<FilledThemeProvider>
				{/* Note: I'm not using styled-components here because it doesn't play
				well with Server-side rendering */}
				<div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
					<Providers>
						<Component {...pageProps} />
					</Providers>
				</div>
			</FilledThemeProvider>
		</>
	);
}

export default MyApp