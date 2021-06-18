import React from 'react';
import styled from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const HeroImage = styled(Images.HeroImage)`
	width: 673px;
	height: 366px;
`;

const Title = styled.p`
	color: ${props => props.theme.colors.white.full};
	font-size: 30px;
	width: 673px;
`;

type HomeHeaderProps = React.PropsWithoutRef<{}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<HeroImage />
			<Title>
				Conheça nossa plataforma de análise da dados para otimizar investimentos de impacto.
			</Title>
		</HomeSubpartRoot>
	);
};

export default HomeHeader;
