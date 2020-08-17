import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';

import HomeHeader from '../../components/layout/home/header';

const Main = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32px;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Mônada</title>
			</Head>
			<Navbar />
			<Main>
				<HomeHeader />
			</Main>
		</>
	)
}
