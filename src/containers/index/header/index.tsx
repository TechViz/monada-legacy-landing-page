import React from 'react';
import styled from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const Root = styled.div`
	width: 100%;
	margin: 16px 0 64px 0;
`;

const HeroImage = styled(Images.HeroImage).attrs({ width: 673, height: 366 })``;

const Title = styled.p`
	color: ${props => props.theme.colors.white.full};
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	margin: 16px 0 12px 0;
	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		font-size: 30px;
	}
`;

const Subtitle = styled.p`
	color: ${props => props.theme.colors.white.full};
	text-align: center;
	font-size: 30px;
	margin: 0;
	font-weight: lighter;

	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		font-size: 24px;
	}
`;

type HomeHeaderProps = React.PropsWithoutRef<{}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Root>
				<HeroImage />
				<Title>Conheça a Mônada Analytics</Title>
				<Subtitle>
					Nossa plataforma de análise da dados para otimizar investimentos de impacto.
				</Subtitle>
			</Root>
		</HomeSubpartRoot>
	);
};

export default HomeHeader;
