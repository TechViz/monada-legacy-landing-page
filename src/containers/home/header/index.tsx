import React from 'react';
import styled from 'styled-components';
import SlideIn from '../../../components/reusable/slide-in';
import Images from '../../../constants/images';

const Root = styled.div`
	min-height: 100vh;
	margin-top: -10vh;
	width: 100%;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100%;
	column-gap: 128px;
	padding: 64px;
	align-items: center;
	justify-content: center;
`;

const BackgroundImage = styled(Images.Misc.HomeHeaderBackground).attrs(() => ({ fit: 'cover' }))`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(3px);
`;

const ImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.2;
	background-color: black;
`;

const TextContainer = styled.div`
	color: ${props => props.theme.colors.primary.main};
	max-width: 612px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-weight: bold;
	text-align: center;
	color: white;
	padding: 0 16px;
	font-size: 60px;
	text-shadow: 0 0 1px #000;
`;

const AspectRatioWrapper = styled.div`
	width: 100%;
	height: 0px;
	position: relative;
	padding-bottom: 100%;
`;

const HeaderLogo = styled(Images.Logo.Main)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	border-radius: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 400px;
	max-height: 400px;
`;

type HomeHeaderProps = React.PropsWithoutRef<{
}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='header'>
			<BackgroundImage />
			<ImageOverlay />
			<SlideIn direction='right'>
				<TextContainer>
					<Title>Gestão e métricas de impactos de investimentos em D&I para sua empresa</Title>
				</TextContainer>
			</SlideIn>
			<AspectRatioWrapper>
				<HeaderLogo />
			</AspectRatioWrapper>
		</Root>
	);
}

export default HomeHeader;