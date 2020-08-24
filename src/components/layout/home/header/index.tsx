import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './logo';
import SlideIn from '../../../reusable/slide-in';
import Images from '../../../../constants/images';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: max-content max-content;
	grid-template-rows: 100%;
	column-gap: 128px;
	padding: 64px;
	align-items: center;
	justify-content: center;
`;

const TextContainer = styled.div`
	color: ${props => props.theme.colors.primary.main};
	max-width: 612px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-weight: normal;
	text-align: center;
	padding: 0 16px;
	font-size: 40px;
`;

const HeroName = styled(Images.Logo.Text)`
	width: 300px;
	margin: 0 auto;
`;

const Description = styled.p`
	font-size: 24px;
	margin: 0;
`;

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
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
					<HeroName>Mônada</HeroName>
					<Title>A primeira startup com foco em D&I Analytics no Brasil</Title>
					<Description>
						Atuamos para gerar oportunidades de impacto, aumento de produtividade,
						eficiência, desempenho e lucratividade através do gerenciamento de
						métricas de Diversidade, Equidade e Inclusão em empresas.
					</Description>
				</TextContainer>
			</SlideIn>
			<ImageContainer>
				<HeaderLogo />
			</ImageContainer>
		</Root>
	);
}

export default HomeHeader;