import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../images';
import ContactForm from '../../reusable/contact-form';
import { smoothScrollIntoElementId } from '../../../libs/smooth-scroll';
import { CONTACT_FORM_WIDTH, NAVBAR_HEIGHT } from '../../../constants/default-page-spacings';

const PURPLE_PART_HEIGHT = 163;

const Root = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: ${NAVBAR_HEIGHT}px;
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	z-index: ${props => props.theme.zIndex.navbar};
	position: fixed;
	left: 0;
	top: 0;
`;

const PurplePart = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	height: ${PURPLE_PART_HEIGHT}px;
	column-gap: 96px;
	display: flex;
	padding: 16px 32px;

	font-size: 48px;
	align-items: center;

	${props => props.theme.mediaQueries.maxScreen.custom(1025)} {
		font-size: 40px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(930)} {
		font-size: 32px;
	}

	${props => props.theme.mediaQueries.maxScreen.custom(739)} {
		column-gap: 64px;
		font-size: 24px;
	}

	${props => props.theme.mediaQueries.maxScreen.custom(600)} {
		column-gap: 32px;
		font-size: 18px;
	}

	${props => props.theme.mediaQueries.maxScreen.custom(450)} {
		column-gap: 8px;
		font-size: 14px;
	}
`;

const Logo = styled(Images.main)`
	height: 100%;
	width: 100%;
	cursor: pointer;
`;

const LogoAnchor = styled.a.attrs({ href: `#` })`
	background-color: ${({ theme }) => theme.colors.white.full};
	border-radius: 100%;
	padding: 16px;
	height: 120px;
	width: 120px;
	align-self: center;
	position: absolute;
	${props => props.theme.mediaQueries.maxScreen.custom(930)} {
		height: 96px;
		width: 96px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(600)} {
		height: 80px;
		width: 80px;
	}
`;

const Text = styled.p`
	color: ${props => props.theme.colors.white.full};
	margin: 0;
	text-align: center;
	height: max-content;
	width: 100%;
	align-self: center;
	position: relative;
	${props => props.theme.mediaQueries.maxScreen.custom(739)} {
		left: 32px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(450)} {
		width: 150px;
		left: 100px;
	}
`;

const ContactFormContainer = styled.div`
	position: absolute;
	top: calc(100% - 0px);
	right: 0px;
	z-index: -1;
	background-color: ${props => props.theme.colors.white.full};
	padding: 32px;
	width: ${CONTACT_FORM_WIDTH}px;
	min-height: calc(100vh - ${NAVBAR_HEIGHT}px);

	${props => props.theme.mediaQueries.maxScreen.custom(1130)} {
		display: none;
	}
`;

const BluePart = styled.ul`
	min-width: 100%;
	background-color: ${props => props.theme.colors.blue.light};
	color: ${props => props.theme.colors.white.full};
	display: flex;
	margin: 0;
	padding: 8px 160px;
	overflow-x: auto;
`;

const NavItem = styled.li`
	display: block;
	list-style: none;
	font-size: 24px;
	color: ${props => props.theme.colors.white.full};

	& > a {
		display: block;
		text-align: center;
		transition: 200ms;
		margin-right: 96px;
		color: inherit;
		text-decoration: none;
	}

	&:hover {
		color: ${props => props.theme.colors.primary.main};
	}
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	function makeLinkClickHandler(elementId: string) {
		return (event: React.MouseEvent) => {
			event.preventDefault();
			event.stopPropagation();
			smoothScrollIntoElementId(elementId, undefined, -NAVBAR_HEIGHT);
		};
	}

	return (
		<Root>
			<PurplePart>
				<Link href="/">
					<LogoAnchor>
						<Logo />
					</LogoAnchor>
				</Link>
				<Text>
					Descubra o quanto seus esforços
					<br />
					em D&I impactam sua empresa.
				</Text>
				<ContactFormContainer>
					<ContactForm />
				</ContactFormContainer>
			</PurplePart>
			<BluePart>
				<NavItem>
					<Link href="/#about">
						<a onClick={makeLinkClickHandler('about')}>Sobre</a>
					</Link>
				</NavItem>
				<NavItem>
					<Link href="/#team">
						<a onClick={makeLinkClickHandler('team')}>Quem Somos</a>
					</Link>
				</NavItem>
				<NavItem>
					<a href="https://www.linkedin.com/company/monada-tech/" target="_blank" rel="noopener">
						Blog
					</a>
				</NavItem>
			</BluePart>
		</Root>
	);
};

export default Navbar;
