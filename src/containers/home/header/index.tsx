import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';
import Images from '../../../constants/images';

const Root = styled.div`
	min-height: 90vh;
	width: 100%;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100%;
	column-gap: 64px;
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

const KnowMoreButton = styled(Button).attrs({ as: 'a' })<{ href?: string, download?: string }>`
	margin-left: auto;
	font-weight: normal;
	background-color: ${props => props.theme.colors.secondary.main};
	:hover, :focus {
		border-color: white;
	}
`;

const HeaderLogo = styled(Images.Misc.HomeHeaderBackground)`
	height: 100%;
	width: auto;
	max-height: min(70vh, 444px);
`;

type HomeHeaderProps = React.PropsWithoutRef<{
}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='header'>
			<TextContainer>
				<SmallText>
					<strong><i>D&I Analytics</i></strong> e o método <strong>Mônada:</strong>
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
			<HeaderLogo />
		</Root>
	);
}

export default HomeHeader;