import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';
import { deployedURLHome } from '../../constants/deployed-url';
import { description } from '../../constants/basic-page-description';
import ContactForm from './contact-form';
import ImageURLs from '../../images/image-urls';
import HomeHeader from './header';
import NavbarSpacing from '../../components/reusable/navbar-spacing';
import WhatWeDo from './what-we-do';
import SocialProof from './social-proof';
import WhoAreWe from './who-are-we';

const Main = styled.div`
	min-height: 100vh;
	padding: 16px;
	background-color: ${props => props.theme.colors.blue.light};
`;

/**
 * Visit https://schema.org/docs/full.html for a list of all types to put here
 */
const JSONLD = `{
	"@context": "http://schema.org/",
	"@type": "Corporation",
	"name": "Mônada",
	"email": "contato@monada.tech",
	"logo": "${ImageURLs.logoPng}",
	"description": "${description}",
	"url": "${deployedURLHome}"
}`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Mônada</title>
				<link rel="canonical" href={deployedURLHome} />

				{/* This is json-ld with schema data */}
				<script type="application/ld+json">{JSONLD}</script>
				<meta name="description" content={description} />
			</Head>
			<Navbar />
			<Main>
				<NavbarSpacing />
				<HomeHeader />
				<WhatWeDo />
				<SocialProof />
				<WhoAreWe />
			</Main>
			<ContactForm />
		</>
	);
}
