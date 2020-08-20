import React from 'react';
import styled from 'styled-components';
import { useHamburguer } from '../../../contexts/hamburguer';

const Root = styled.li`
	list-style: none;
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		width: 100%;
	}
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-size: ${props => props.theme.font.size.large};
	transition-duration: 200ms;
	transition-property: background-color color;
	outline: none;
	color: ${props => props.theme.colors.primary.main};
	:hover, :focus {
		background-color: ${props => props.theme.colors.primary.main};
		color: white;
	}
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		// Mobile only
		display: block;
		padding: 16px 24px;
		text-align: center;
		width: 100%;
		width: 100%;
	}
	${props => props.theme.mediaQueries.minScreen.tablet} {
		// Desktop only
		margin: 0 8px;
		padding: 8px 12px;
		border-radius: 8px;
	}
`;

const MobileAnchor = styled(Anchor)`
	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: none;
	}
`;

const DesktopAnchor = styled(Anchor)`
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		display: none;
	}
`;

type NavLinkProps = React.PropsWithChildren<{
	/** The ID of the document object to scroll to */
	idToFocus: string,
}> & React.ComponentProps<'li'>;

type NavLinkComponent = React.FunctionComponent<NavLinkProps>;

const NavLink: NavLinkComponent = ({
	idToFocus,
	children,
	ref,
	onClick,
	...props
}) => {
	const { isHamburguerOpen } = useHamburguer();

	return (
		<Root onClick={onClick} {...props}>
			<MobileAnchor tabIndex={isHamburguerOpen ? 0 : -1} href='#'>
				{children}
			</MobileAnchor>
			<DesktopAnchor href={'#'}>
				{children}
			</DesktopAnchor>
		</Root>
	);
}

export default NavLink;