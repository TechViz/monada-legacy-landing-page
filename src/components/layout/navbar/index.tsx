import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../constants/images';
import NavLink from './nav-link';

const Root = styled.div`
	height: 10vh;
	padding: 8px 32px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.white};
	box-shadow: ${({ theme }) => theme.shadows.layout.large};
	display: flex;
	justify-content: space-between;
`;

const Logo = styled(Images.Logo.Textless)`
	height: 100%;
	width: auto;
	cursor: pointer;
`;

const LinksContainer = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	align-items: center;
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	return (
		<Root>
			<Link href='/home'>
				<Logo />
			</Link>
			<LinksContainer>
				<NavLink idToFocus='video'>Quem Somos</NavLink>
				<NavLink idToFocus='tomate'>Planos</NavLink>
				<NavLink idToFocus='tomate'>Sobre Nós</NavLink>
				<NavLink idToFocus='macarrão'>Contato</NavLink>
			</LinksContainer>
		</Root>
	);
}

export default Navbar;