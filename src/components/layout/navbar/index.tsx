import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../images';
import ContactForm from './contact-form';

const Root = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	column-gap: 64px;
	display: flex;
	padding: 16px 32px;
	z-index: ${props => props.theme.zIndex.navbar};
	height: 161px;
	position: fixed;
	left: 0;
	top: 0;
`;

const Logo = styled(Images.main)`
	height: 100%;
	width: 100%;
	cursor: pointer;
`;

const Anchor = styled.a.attrs({ href: `#` })`
	background-color: ${({ theme }) => theme.colors.white.full};
	border-radius: 100%;
	padding: 16px;
	height: 112px;
	width: 112px;
	align-self: center;
`;

const TextContainer = styled.div`
	display: flex;
	color: ${props => props.theme.colors.white.full};
	flex-direction: column;
`;

const StrongText = styled.p`
	font-weight: bolder;
	margin: 0;
	font-size: 24px;
`;

const LargeText = styled.p`
	font-weight: lighter;
	margin: 0;
	font-size: 48px;
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	return (
		<Root>
			<Link href="/home">
				<Anchor>
					<Logo />
				</Anchor>
			</Link>
			<TextContainer>
				<StrongText>Descubra o quanto seus esforços em</StrongText>
				<LargeText>Diversidade e Inclusão</LargeText>
				<StrongText>impactam sua empresa.</StrongText>
			</TextContainer>
			<ContactForm />
		</Root>
	);
};

export default Navbar;
