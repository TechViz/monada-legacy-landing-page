import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
`;

type HomeAboutUsProps = React.PropsWithoutRef<{
}>;

type HomeAboutUsComponent = React.FunctionComponent<HomeAboutUsProps>;

const HomeAboutUs: HomeAboutUsComponent = ({  }) => {
	return (
		<Root>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/X4_KojYz2_M'
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</Root>
	);
}

export default HomeAboutUs;