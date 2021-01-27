import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../constants/images';
import NavLink from './nav-link';
import Hamburguer from '../../reusable/hamburguer';
import { useHamburguer } from '../../../contexts/hamburguer';
import { smoothScrollIntoElementId } from '../../../libs/smooth-scroll';
import Button from '../../reusable/button';

const Root = styled.div`
	width: 100%;
	height: ${props => props.theme.spacing.navbarHeight};
	background-color: white;
	box-shadow: ${({ theme }) => theme.shadows.navbar};
	z-index: ${props => props.theme.zindex.navbar};
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	padding: 8px ${props => props.theme.spacing.horizontalPadding};
	${props => props.theme.mediaQueries.minScreen.tablet} {
	}
	@media screen and (max-width: 1090px) {
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

const PDFLink = styled(Button).attrs({ as: 'a' })<{ download: string, href: string }>`
	background-color: ${props => props.theme.colors.yellow.main};
	color: ${props => props.theme.colors.purple.main};
	border-color: ${props => props.theme.colors.purple.main};
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
		{ idToFocus: 'plans', text: 'Soluções' },
		{ idToFocus: 'sponsors', text: 'Parcerias' },
		{ idToFocus: 'contact', text: 'Contato' },
	];

	function handleClick (event: React.MouseEvent) {
		event.preventDefault();
		smoothScrollIntoElementId('header');
	}

	return (
		<Root ref={rootRef}>
			<Link href='/#header'>
				<Anchor onClick={handleClick}>
					<Logo height={40} width={150} />
				</Anchor>
			</Link>
			<LinksContainer ref={linksContainerRef}>
				<li style={{ listStyle: 'none' }}>
					<PDFLink download="D&I Analytics e o Metodo Monada.pdf" href="/apresentacao.pdf">
						Quero saber mais
					</PDFLink>
				</li>
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