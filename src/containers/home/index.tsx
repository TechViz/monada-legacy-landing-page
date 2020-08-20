import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';

import HomeHeader from '../../components/layout/home/header';
import { useHamburguer } from '../../contexts/hamburguer';
import HomeAboutUs from '../../components/layout/home/about-us';
import HomePlans from '../../components/layout/home/plans';
import HomeMonadaTeam from '../../components/layout/home/monada-team';
import HomeContact from '../../components/layout/home/contact';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 32px;
	overflow-y: auto;
`;

export default function Home() {
	const { closeHamburguer } = useHamburguer();

	return (
		<>
			<Head>
				<title>Mônada</title>
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
