import React from 'react';
import styled from 'styled-components';
import FloatIconButton from '../../../reusable/float-icon-button';
import Images from '../../../../constants/images';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	position: relative;
`;

const PresentIcon = styled(Images.Icons.gift)`
	width: 32px;
	height: 32px;
`;

const PresentButton = styled(FloatIconButton)`
	position: absolute;
	right: 64px;
	bottom: 64px;
	padding: 16px;
	background-color: ${props => props.theme.colors.primary.white};
`;

type HomeAboutUsProps = React.PropsWithoutRef<{}>;
type HomeAboutUsComponent = React.FunctionComponent<HomeAboutUsProps>;

const HomeAboutUs: HomeAboutUsComponent = () => {

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
			<PresentButton imageElem={<PresentIcon />} />
		</Root>
	);
}

export default HomeAboutUs;