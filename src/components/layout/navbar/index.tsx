import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../constants/images';
import NavLink from './nav-link';
import Hamburguer from '../../reusable/hamburguer';
import { useHamburguer } from '../../../contexts/hamburguer';
import { smoothScrollIntoElementId } from '../../../libs/smooth-scroll';

const Root = styled.div`
	width: 100%;
	height: min-content;
	background-color: white;
	box-shadow: ${({ theme }) => theme.shadows.navbar};
	display: flex;
	justify-content: space-between;
	z-index: ${props => props.theme.zindex.navbar};
	padding: 8px 8px;
	${props => props.theme.mediaQueries.minScreen.tablet} {
		padding: 8px 128px;
	}
	@media screen and (max-width: 1090px) {
		padding: 8px 64px;
	}
`;

const Logo = styled(Images.Logo.Horizontal)`
	height: 40px;
	width: 150px;
`;

const LinksContainer = styled.ul`
	padding: 0;
	margin: 0;
	align-items: center;

	${props => props.theme.mediaQueries.maxScreen.tablet} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transform: translate(0, -100%);
	}
	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: flex;
		position: relative;
		right: -16px;
	}
`;

const MobileHamburguer = styled.div`
	display: flex;
	align-items: center;

	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: none;
	}
`;

const Anchor = styled.a.attrs({ href: '#' })`
	max-width: 80px;
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	const rootRef = React.useRef<HTMLDivElement>(null);

	const {
		openHamburguer,
		closeHamburguer,
		isHamburguerOpen,
		setHamburguerOffset,
	} = useHamburguer();

	const linksContainerRef = React.useRef<HTMLUListElement>(null);

	// Tells how much should the screen slide when then hamburguer opens
	React.useEffect(() => {
		const height = linksContainerRef.current!.clientHeight;
		setHamburguerOffset(height);
	}, []);

	const links = [
		{ idToFocus: 'about-us', text: 'Sobre Nós' },
		{ idToFocus: 'products', text: 'Produtos' },
		{ idToFocus: 'contact', text: 'Contato' },
		{ idToFocus: 'team', text: 'Parcerias' },
	];

	function handleClick (event: React.MouseEvent) {
		event.preventDefault();
		smoothScrollIntoElementId('main-page-container');
	}

	return (
		<Root ref={rootRef}>
			<Link href='/#main-page-container'>
				<Anchor onClick={handleClick}>
					<Logo />
				</Anchor>
			</Link>
			<LinksContainer ref={linksContainerRef}>
				{links.map(link => <NavLink
					idToFocus={link.idToFocus}
					children={link.text}
					key={link.text}
				/>)}
			</LinksContainer>
			<MobileHamburguer>
				<Hamburguer
					value={isHamburguerOpen}
					onOpen={openHamburguer}
					onClose={closeHamburguer}
					animationTime={500}
				/>
			</MobileHamburguer>
		</Root>
	);
}

export default Navbar;