import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { deployedURLHome } from '../../constants/deployed-url';
import { description } from '../../constants/basic-page-description';
import ImageURLs from '../../images/image-urls';
import Images from '../../images';
import ContactForm from '../../components/reusable/contact-form';

const Main = styled.div`
	min-height: 100vh;
	padding: 16px;
	background-color: ${props => props.theme.colors.blue.light};
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto;
	align-items: center;
	align-content: center;
	justify-content: center;
	row-gap: 32px;
	column-gap: 32px;
	flex-wrap: wrap;

	${props => props.theme.mediaQueries.maxScreen.custom(1130)} {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
	}
`;

const Container = styled.div`
	width: 100%;
	max-width: 600px;
	background-color: ${props => props.theme.colors.white.full};
	padding: 16px;
	border-radius: 12px;
	box-shadow: ${props => props.theme.shadows.card.medium};
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
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

const Logo = styled(Images.main)`
	width: 200px;
	height: 200px;
	align-self: center;
`;

const Title = styled.h1`
	color: ${props => props.theme.colors.primary.main};
`;

const Description = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 22px;
	margin: 0;
`;

const LinkedinLogo = styled(Images.LinkedinLogo)`
	width: 24px;
	height: 24px;
`;

const InstagramLogo = styled(Images.InstagramLogo)`
	width: 24px;
	height: 24px;
`;

const Link = styled.a.attrs({ rel: 'noopener' })`
	display: flex;
	align-items: center;
	column-gap: 8px;
	font-weight: bold;
	margin: 8px 0 8px 16px;
`;

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
			<Main>
				<Container>
					<Logo />
					<Title>Olá! Que bom te ver por aqui!</Title>
					<Description>
						No momento a página está fechada para reformas. Por enquanto, você pode acompanhar todas
						as atualizações da Mônada por nossas redes sociais:
						<Link href="https://www.linkedin.com/company/monada-tech/">
							<LinkedinLogo />
							Linkedin
						</Link>
						<Link href="https://www.instagram.com/monada.tech/">
							<InstagramLogo />
							Instagram
						</Link>
						Ou, entre em contato com a gente preenchendo o formulário.
						<br />
						<br />
						Esperamos te ver em breve!
						<br />
						<br />
						Equipe Mônada
					</Description>
				</Container>
				<Container>
					<ContactForm />
				</Container>
			</Main>
		</>
	);
}
