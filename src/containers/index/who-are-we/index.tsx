import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';
import WhoAreWeCard from './card';

const Title = styled.p`
	margin: 0;
	font-size: 45px;
	font-weight: bold;
`;

const Image = styled.div`
	width: 128px;
	height: 128px;
	background-color: ${props => props.theme.colors.gray.light};
	border-radius: 100%;
`;

const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 32px;
	margin-top: 32px;
	font-size: 30px;
`;

type WhoAreWeProps = React.PropsWithoutRef<{}>;

type WhoAreWeComponent = React.FunctionComponent<WhoAreWeProps>;

const WhoAreWe: WhoAreWeComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Title>Quem somos:</Title>
			<CardsContainer>
				<WhoAreWeCard imageComponent={<Image />} name="Reijane Salazar" occupation="Educadora" />
				<WhoAreWeCard imageComponent={<Image />} name="Adla Viana" occupation="Antropólaga" />
				<WhoAreWeCard
					imageComponent={<Image />}
					name="Maria Luiza Salvador"
					occupation="Product Designer"
				/>
			</CardsContainer>
		</HomeSubpartRoot>
	);
};

export default WhoAreWe;
