import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';

const List = styled.ul`
	padding: 0;
	width: 673px;
	padding-left: 16px;
	font-size: 32px;
`;

const Item = styled.li`
	margin-bottom: 32px;
`;

type WhatWeDoProps = React.PropsWithoutRef<{}>;

type WhatWeDoComponent = React.FunctionComponent<WhatWeDoProps>;

const WhatWeDo: WhatWeDoComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<List>
				<Item>O que fazemos;</Item>
				<Item>O que fazemos;</Item>
				<Item>O que fazemos;</Item>
				<Item>O que fazemos;</Item>
				<Item>O que fazemos;</Item>
			</List>
		</HomeSubpartRoot>
	);
};

export default WhatWeDo;
