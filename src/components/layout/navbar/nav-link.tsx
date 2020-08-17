import React from 'react';
import styled from 'styled-components';

const Root = styled.li`
	list-style: none;
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-size: ${props => props.theme.font.size.large};
	padding: 8px 12px;
	margin: 0 8px;
	transition-duration: 200ms;
	transition-property: background-color color;
	outline: none;
	border-radius: 8px;
	color: ${props => props.theme.colors.primary.main};
	:hover, :focus {
		background-color: ${props => props.theme.colors.primary.main};
		color: white;
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

	function handleClick (event: React.MouseEvent<HTMLLIElement>) {
		const targetElem = document.getElementById('#' + idToFocus);
		if (!targetElem) {
			console.warn(`Trying to scroll to invalid element of id '${idToFocus}'`);
			return;
		}
		// TODO - actual scroll
		console.log(`Scrolling to element...`, targetElem);

		if (onClick) onClick(event);
	}

	return (
		<Root onClick={handleClick} {...props}>
			<Anchor href='#'>
				{children}
			</Anchor>
		</Root>
	);
}

export default NavLink;