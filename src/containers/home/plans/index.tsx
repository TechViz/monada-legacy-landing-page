import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import Button from '../../../components/reusable/button';

const Root = styled.div`
	min-height: 100vh;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding:
		calc(1rem + ${props => props.theme.spacing.navbarHeight})
		${props => props.theme.spacing.horizontalPadding}
		1rem
		${props => props.theme.spacing.horizontalPadding}
	;
`;

const Title = styled.h1`
	margin: 0;
	position: absolute;
	font-size: 40px;
	color: ${props => props.theme.colors.purple.main};
	top: calc(${props => props.theme.spacing.navbarHeight} + 1rem);
	font-weight: 300;
`;

const Italic = styled.span`
	font-style: italic;
`;

const CardsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-end;
`;

const Card = styled.div<{ colorSelector: (color: DefaultTheme['colors']) => string }>`
	color: white;
	border-radius: 64px;
	padding: 2rem;
	background-color: ${props => props.colorSelector(props.theme.colors)};
	width: 360px;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: max-content;
	text-align: center;
`;

const CardTitle = styled.h2`
	font-size: 36px;
	font-weight: bold;
	margin: 0;
`;

const Separator = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid white;
	margin: 1rem 0 3.5rem 0;
`;

const CardDescription = styled.p`
	font-size: 25px;
	margin: 0;
	font-weight: 300;
`;

const CardSubtitle = styled.p`
	font-size: 30px;
	font-weight: bold;
	margin: 0;
`;

const CardPlus = styled.p.attrs({ children: '+' })`
	font-size: 30px;
	margin: 0.5rem 0;
`;

const AskForBudget = styled(Button)`
	margin-left: auto;
	margin-top: 1rem;
	width: 360px;
	padding: 1rem
`;

type HomePlansProps = React.PropsWithoutRef<{
}>;

type HomePlansComponent = React.FunctionComponent<HomePlansProps>;

const HomePlans: HomePlansComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='plans'>
			<Title>
				Oferecemos <strong>serviços de<br />
				<Italic>D&I Analytics</Italic></strong> divididos em <strong>3<br />
				soluções complementares.</strong>
			</Title>
			<CardsContainer>
				<Card colorSelector={colors => colors.blue.main}>
					<CardTitle>Mônada <Italic>Report</Italic></CardTitle>
					<Separator />
					<CardDescription>
						Um diagnóstico inicial com métricas de <Italic>D&I</Italic> focadas em INCLUSÃO da sua empresa.
					</CardDescription>
				</Card>
				<Card colorSelector={colors => colors.pink.main}>
					<CardTitle>Mônada <Italic>Way</Italic></CardTitle>
					<Separator />
					<CardSubtitle>
						Mônada <Italic>Report</Italic>
					</CardSubtitle>
					<CardPlus />
					<CardDescription>
						Mediações customizadas para geração de oportunidades de novos negócios.
					</CardDescription>
				</Card>
				<Card colorSelector={colors => colors.purple.main}>
					<CardTitle>Mônada <Italic>Analytics</Italic></CardTitle>
					<Separator />
					<CardSubtitle>
						Mônada <Italic>Report</Italic>
					</CardSubtitle>
					<CardPlus />
					<CardSubtitle>
						Mônada <Italic>Way</Italic>
					</CardSubtitle>
					<CardPlus />
					<CardDescription>
						<Italic>Dashboard</Italic> com monitoramento constante de <Italic>D&I</Italic> através de análise de dados específicos da área de atuação da sua empresa.
					</CardDescription>
				</Card>
			</CardsContainer>
			<AskForBudget>Solicite um orçamento</AskForBudget>
		</Root>
	);
}

export default HomePlans;