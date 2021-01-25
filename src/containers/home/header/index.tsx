import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';
import Images from '../../../constants/images';

const Root = styled.div`
	height: 100vh;
	width: 100%;
	display: grid;
	position: relative;
	grid-template-columns: max-content 1fr;
	grid-template-rows: 100%;
	padding:
		calc(${props => props.theme.spacing.navbarHeight} + 1rem)
		${props => props.theme.spacing.horizontalPadding}
		1rem
		${props => props.theme.spacing.horizontalPadding}
	;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.purple.main};
`;

const TextContainer = styled.div`
	color: white;
	max-width: 520px;
	display: flex;
	flex-direction: column;
	font-weight: lighter;
`;

const LargeText = styled.h1`
	margin: 0;
	font-weight: bold;
	font-size: 50px;
	text-shadow: 0 0 1px #000;
	white-space: nowrap;
`;

const SmallText = styled.p`
	margin: 1rem 0;
	font-size: 30px;
`;

const KnowMoreButton = styled(Button).attrs({ as: 'a' })<{ href?: string, download?: string }>`
	margin-left: auto;
	font-weight: normal;
	background-color: white;
	margin-top: 1.75rem;
	:hover {
		background-color: transparent;
		border-color: white;
	}
`;

const HeaderLogo = styled(Images.Misc.HomeHeaderBackground)`
	max-height: min(90%, 665px);
	max-width: min(90%, 665px);
	height: 100%;
	width: auto;
	justify-self: flex-end;
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
				<LargeText>análise de dados em <br /> Diversidade e Inclusão</LargeText>
				<SmallText>
					que <strong>impactam</strong> nos <strong>indicadores (KPIs)</strong> da sua empresa.
				</SmallText>
				<KnowMoreButton
					download="D&I Analytics e o Metodo Monada.pdf"
					href="/apresentacao.pdf"
				>Quero saber mais</KnowMoreButton>
			</TextContainer>
			<HeaderLogo width={546} height={569} />
		</Root>
	);
}

export default HomeHeader;