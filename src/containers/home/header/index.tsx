import React from 'react';
import styled from 'styled-components';
import SlideIn from '../../../components/reusable/slide-in';
import Images from '../../../constants/images';
import HeaderLogoTemplate from './logo';

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
	${props => props.theme.mediaQueries.maxScreenMinusOne.laptop} {
		display: flex;
		flex-direction: column-reverse;
	}
`;

const BackgroundImage = styled(Images.Misc.HomeHeaderBackground).attrs(() => ({ fit: 'cover' }))`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(3px);
	z-index: ${props => props.theme.zindex.backgroundImage};
`;

const ImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.2;
	background-color: black;
	z-index: ${props => props.theme.zindex.backgroundImage};
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

const WhiteBallBackground = styled.div`
	border-radius: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 400px;
	padding: 3rem;
	${props => props.theme.mediaQueries.maxScreenMinusOne.laptop} {
		margin-top: 25px;
		width: 250px;
		height: 250px;
		padding: 2rem;
	}
`;

const HeaderLogo = styled(HeaderLogoTemplate)`
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
			<WhiteBallBackground>
				<HeaderLogo />
			</WhiteBallBackground>
		</Root>
	);
}

export default HomeHeader;