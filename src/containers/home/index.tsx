import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';

import HomeHeader from '../../components/layout/home/header';
import { useHamburguer } from '../../contexts/hamburguer';
import HomeAboutUs from '../../components/layout/home/about-us';
import HomePlans from '../../components/layout/home/plans';
import HomeMonadaTeam from '../../components/layout/home/monada-team';
import HomeContact from '../../components/layout/home/contact';
import deployedUrl from '../../constants/deployed-url';
import ImageURLS from '../../images';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 32px;
	overflow-y: auto;
`;

const JSONLD = `{
	"@context": "http://schema.org/",
	"@type": "Corporation",
	"@id": "https://monada.tech/",
	"url": "https://monada.tech/",
	"name": "Mônada",
	"image": "${deployedUrl}${ImageURLS.logo.png.main}",
	"email": "contato@monada.tech",
	"founder": [
		{
			"@type": "Person",
			"name": "Reijane Salazar",
			"gender": "Female",
			"jobTitle": "Pesquisadora",
			"image": "${deployedUrl}${ImageURLS.founders.reijane}",
			"familyName": "Salazar"
		},
		{
			"@type": "Person",
			"name": "Maria Luiza Salvador",
			"gender": "Female",
			"jobTitle": "Designer",
			"image": "${deployedUrl}${ImageURLS.founders.maria}",
			"familyName": "Salvador"
		},
		{
			"@type": "Person",
			"name": "Adla Viana",
			"gender": "Female",
			"jobTitle": "Pesquisadora",
			"image": "${deployedUrl}${ImageURLS.founders.adla}",
			"familyName": "Viana"
		}
	],
	"logo": "${deployedUrl}${ImageURLS.logo.png.main}"
}`;

export default function Home() {
	const { closeHamburguer } = useHamburguer();

	return (
		<>
			<Head>
				<title>Mônada</title>
				<link rel='canonical' href={`${deployedUrl}/home`}/>
				<script type='application/json-ld'>{JSONLD}</script>
				<meta property='og:title' content='Mônada - D&I Analytics' />
				<meta property='og:site-name' content='Mônada' />
				<meta property='og:url' content={deployedUrl + '/'} />
				<meta property='og:description' content='Atuamos para gerar oportunidades de impacto, aumento de produtividade, eficiência, desempenho e lucratividade através do gerenciamento de métricas de Diversidade, Equidade e Inclusão em empresas.' />
				<meta property='og:image' content={`${deployedUrl}${ImageURLS.logo.png.main}`} />
			</Head>
			<Navbar />
			{/* Note: The ID is used by the navbar to scroll this element's contents into view. */}
			<Main onClick={closeHamburguer} id='main-page-container'>
				<HomeHeader />
				<HomeAboutUs />
				<HomePlans />
				<HomeMonadaTeam />
				<HomeContact />
			</Main>
		</>
	)
}
