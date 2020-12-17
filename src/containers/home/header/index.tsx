import React from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import Button from '../../../components/reusable/button';
import SlideIn from '../../../components/reusable/slide-in';
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
	background-color: ${props => props.theme.colors.primary.main};
	${props => props.theme.mediaQueries.maxScreenMinusOne.laptop} {
		display: flex;
		flex-direction: column-reverse;
	}
`;

const TextContainer = styled.div`
	color: white;
	max-width: 520px;
	display: flex;
	flex-direction: column;
	font-weight: lighter;
	margin: auto 0 auto auto;
`;

const LargeText = styled.h1`
	margin: 0;
	font-weight: bold;
	font-size: 50px;
	text-shadow: 0 0 1px #000;
`;

const SmallText = styled.p`
	margin: 0;
	font-size: 30px;
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

const KnowMoreButton = styled(Button).attrs({ as: 'a' })<{ href?: string, download?: string }>`
	margin-left: auto;
	font-weight: normal;
	background-color: ${props => props.theme.colors.secondary.main};
	:hover, :focus {
		border-color: white;
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
			<SlideIn direction='right'>
				<TextContainer>
					<SmallText>
						<strong><i>D&I Analytics</i></strong> e o método <strong>Mônada</strong>:
					</SmallText>
					<LargeText>análise de dados em Diversidade e Inclusão</LargeText>
					<SmallText>
						que <strong>impactam</strong> nos <strong>indicadores (KPIs)</strong> da sua empresa.
					</SmallText>
					<KnowMoreButton
						download="D&I Analytics e o Metodo Monada.pdf"
						href="/apresentacao.pdf"
					>Saiba Mais</KnowMoreButton>
				</TextContainer>
			</SlideIn>
			<WhiteBallBackground>
				<HeaderLogo />
			</WhiteBallBackground>
		</Root>
	);
}

export default HomeHeader;