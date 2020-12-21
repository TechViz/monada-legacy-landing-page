import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';

import HomeHeader from './header';
import { useHamburguer } from '../../contexts/hamburguer';
import deployedUrl from '../../constants/deployed-url';
import ImageURLS from '../../images';
import HomeAboutUs from './about-us';
import HomePlans from './plans';

const Main = styled.div`
`;

const JSONLD = {
	'@context': 'http://schema.org/',
	'@type': 'Organization',
	'@id': 'https://monada.tech/',
	'url': 'https://monada.tech/',
	'name': 'Mônada',
	'image': `${deployedUrl}${ImageURLS.logo.png.main}`,
	'email': 'contato@monada.tech',
	'founder': [
		{
			'@type': 'Person',
			'name': 'Reijane Salazar',
			'gender': 'Female',
			'jobTitle': 'Pesquisadora',
			'image': `${deployedUrl}${ImageURLS.founders.reijane}`,
			'familyName': 'Salazar',
		},
		{
			'@type': 'Person',
			'name': 'Maria Luiza Salvador',
			'gender': 'Female',
			'jobTitle': 'Designer',
			'image': `${deployedUrl}${ImageURLS.founders.maria}`,
			'familyName': 'Salvador',
		},
		{
			'@type': 'Person',
			'name': 'Adla Viana',
			'gender': 'Female',
			'jobTitle': 'Pesquisadora',
			'image': `${deployedUrl}${ImageURLS.founders.adla}`,
			'familyName': 'Viana',
		},
	],
	'logo': {
		'@type': 'ImageObject',
		'name': 'Mônada Logo',
		'contentUrl': `${deployedUrl}${ImageURLS.logo.png.main}`,
		'url': `${deployedUrl}${ImageURLS.logo.png.main}`,
	},
};

export default function Home() {
	const { closeHamburguer } = useHamburguer();

	return (
		<Main onClick={closeHamburguer}>
			<Head>
				<title>Mônada</title>
				<link rel='canonical' href={`${deployedUrl}`}/>

				{/* dangerouslySetInnerHTML is used to prevent string escaping */}
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}></script>

				{/* These meta tags are related to OpenGraph, which allows for your better webpage cards. */}
				<meta property='og:url' content={deployedUrl + '/'} />
			</Head>
			<Navbar />
			<HomeHeader />
			<HomeAboutUs />
			<HomePlans />
		</Main>
	)
}
