import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justofy-content: center;
`;

type HomeHeaderProps = React.PropsWithoutRef<{
}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({  }) => {
	return (
		<Root>
		</Root>
	);
}

export default HomeHeader;