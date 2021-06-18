import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	height: 161px;
	width: 100%;
`;

type NavbarSpacingProps = React.PropsWithoutRef<{}>;

type NavbarSpacingComponent = React.FunctionComponent<NavbarSpacingProps>;

/**
 * This is simply a component that will have the exact height of the navbar. It's used to
 * make sure the navbar will never cover any readable content.
 */
const NavbarSpacing: NavbarSpacingComponent = ({}) => {
	return <Root></Root>;
};

export default NavbarSpacing;
