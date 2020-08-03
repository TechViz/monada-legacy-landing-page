import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../constants/images';

const Root = styled.div`
	height: 10vh;
	padding: 8px;
	width: 100%;
	box-shadow: ${({ theme }) => theme.shadows.layout.large}
`;

const Logo = styled(Images.Logo.Main)`
	height: 100%;
	width: auto;
	cursor: pointer;
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	return (
		<Root>
			<Link href='/home'>
				<Logo />
			</Link>
		</Root>
	);
}

export default Navbar;