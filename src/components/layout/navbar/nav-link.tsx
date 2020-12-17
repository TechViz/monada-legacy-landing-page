import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useHamburguer } from '../../../contexts/hamburguer';
import Button from '../../reusable/button';

const Root = styled.li`
	list-style: none;
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		width: 100%;
	}
`;

const MobileAnchor = styled(Button).attrs({ as: 'a' })`
	padding: 16px 24px;
	text-align: center;
	width: 100%;
	border-radius: 0px;
	${props => props.theme.mediaQueries.minScreen.tablet} {
		display: none;
	}
` as StyledComponent<typeof Button, {}>;

const DesktopAnchor = styled(Button).attrs({ as: 'a' })`
	margin: 0 8px;
	padding: 8px 12px;
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		display: none;
	}
` as StyledComponent<typeof Button, {}>;

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