import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../constants/images';
import NavLink from './nav-link';
import Hamburguer from '../../reusable/hamburguer';
import { useHamburguer } from '../../../contexts/hamburguer';

const Root = styled.div`
	height: 10vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.white};
	box-shadow: ${({ theme }) => theme.shadows.layout.large};
	display: flex;
	justify-content: space-between;

	padding: 8px 8px;
	${props => props.theme.mediaQueries.minScreen.tablet} {
		padding: 8px 32px;
	}
`;

const Logo = styled(Images.Logo.Textless)`
	height: 100%;
	width: auto;
	cursor: pointer;
`;

const LinksContainer = styled.ul`
	padding: 0;
	margin: 0;
	align-items: center;

	${props => props.theme.mediaQueries.maxScreen.tablet} {
		position: absolute;
		right: 0;
		transform: translate(100%, 0);
	}
	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: flex;
	}
`;

const MobileHamburguer = styled.div`
	display: flex;
	align-items: center;

	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: none;
	}
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	const {
		openHamburguer,
		closeHamburguer,
		isHamburguerOpen,
		setHamburguerOffset,
	} = useHamburguer();

	const linksContainerRef = React.useRef<HTMLUListElement>(null);

	React.useEffect(() => {
		const width = linksContainerRef.current!.clientWidth;
		setHamburguerOffset(width);
	}, []);

	return (
		<Root>
			<Link href='/home'>
				<Logo />
			</Link>
			<LinksContainer ref={linksContainerRef}>
				<NavLink idToFocus='video'>Quem Somos</NavLink>
				<NavLink idToFocus='tomate'>Planos</NavLink>
				<NavLink idToFocus='tomate'>Sobre Nós</NavLink>
				<NavLink idToFocus='macarrão'>Contato</NavLink>
			</LinksContainer>
			<MobileHamburguer>
				<Hamburguer
					value={isHamburguerOpen}
					onOpen={openHamburguer}
					onClose={closeHamburguer}
				/>
			</MobileHamburguer>
		</Root>
	);
}

export default Navbar;