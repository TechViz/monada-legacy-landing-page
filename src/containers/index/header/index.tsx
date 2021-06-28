import React from 'react';
import styled from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const Root = styled.div`
	width: 673px;
	margin: 16px 0 64px 0;
`;

const HeroImage = styled(Images.HeroImage)``;

const Title = styled.p`
	color: ${props => props.theme.colors.white.full};
	font-size: 35px;
	text-align: center;
	margin: 16px 0 12px 0;
`;

const Subtitle = styled.p`
	color: ${props => props.theme.colors.white.full};
	text-align: center;
	font-size: 30px;
	margin: 0;
	font-weight: lighter;
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
