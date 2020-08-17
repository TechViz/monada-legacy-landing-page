import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './logo';

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
`;

const Title = styled.h1`
	font-weight: normal;
	text-align: center;
	padding: 0 16px;
`;

const CompanyName = styled.span`
	font-size: 60px;
	font-weight: bold;
`;

const Description = styled.p`
	font-size: 24px;
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
		<Root>
			<TextContainer>
				<Title>Faturamento através de diversidade com a <CompanyName>Mônada</CompanyName></Title>
				<Description>
					A Mônada usa tecnologia de ponta para deixar a sua empresa melhor e mais inteligente.
					Com nossa equipe de pesquisa, nós aumentamos o faturamento da sua empresa em até 20%
					através de políticas de diversidade e inclusão.
				</Description>
			</TextContainer>
			<ImageContainer>
				<HeaderLogo />
			</ImageContainer>
		</Root>
	);
}

export default HomeHeader;