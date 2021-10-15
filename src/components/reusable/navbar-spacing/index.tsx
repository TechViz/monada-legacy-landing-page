import React, { FC } from 'react';
import styled from 'styled-components';
import { NAVBAR_HEIGHT } from '../../../constants/default-page-spacings';

const Root = styled.div`
	height: ${NAVBAR_HEIGHT}px;
	width: 100%;
`;

/**
 * This is simply a component that will have the exact height of the navbar. It's used to
 * make sure the navbar will never cover any readable content.
 */
const NavbarSpacing: FC<{}> = ({}) => {
	return <Root></Root>;
};

export default NavbarSpacing;
