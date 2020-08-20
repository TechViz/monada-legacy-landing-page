import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../constants/images';
import NavLink from './nav-link';
import Hamburguer from '../../reusable/hamburguer';
import { useHamburguer } from '../../../contexts/hamburguer';
import smoothScroll from '../../../libs/smooth-scroll';

const Root = styled.div`
	height: 10vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.white};
	box-shadow: ${({ theme }) => theme.shadows.layout.large.soft.normal};
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
		top: 0;
		left: 0;
		width: 100%;
		transform: translate(0, -100%);
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

const Anchor = styled.a.attrs({ href: '#' })`
	max-width: 80px;
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

	/**
	* Will scroll the element with id `idToFocus` into view (and align them with the
	* top of the screen).
	*/
	function scrollIntoElementId (idToFocus: string) {
		const containerElem = document.getElementById('main-page-container');

		if (!containerElem) {
			console.info('Warning. The container element was not found. Scroll function will be ignored.');
			return;
		}

		const targetElem = document.getElementById(idToFocus);
		if (!targetElem) {
			console.warn(`Trying to scroll to invalid element of id '${idToFocus}'`);
			return;
		}
		smoothScroll(containerElem, targetElem, 1000);
	}

	// Tells how much should the screen slide when then hamburguer opens
	React.useEffect(() => {
		const height = linksContainerRef.current!.clientHeight;
		setHamburguerOffset(height);
	}, []);

	const links = [
		{ idToFocus: 'about-us', text: 'Sobre Nós' },
		{ idToFocus: 'plans', text: 'Planos' },
		{ idToFocus: 'team', text: 'Nossa equipe' },
		{ idToFocus: 'contact', text: 'Contato' },
	];

	return (
		<Root>
			<Link href='/home'>
				<Anchor onClick={() => scrollIntoElementId('header')}>
					<Logo />
				</Anchor>
			</Link>
			<LinksContainer ref={linksContainerRef}>
				{links.map(link => <NavLink
					idToFocus={link.idToFocus}
					children={link.text}
					key={link.text}
					onClick={() => scrollIntoElementId(link.idToFocus)}
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