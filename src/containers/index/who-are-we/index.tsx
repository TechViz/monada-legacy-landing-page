import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';
import WhoAreWeCard from './card';

const Root = styled.div`
	padding: 64px 0;
`;

const Title = styled.p`
	margin: 0;
	font-size: 45px;
	font-weight: bold;
	${props => props.theme.mediaQueries.maxScreen.custom(700)} {
		font-size: 36px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		font-size: 30px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(400)} {
		font-size: 24px;
	}
`;

const Image = styled.div`
	width: 128px;
	height: 128px;
	background-color: ${props => props.theme.colors.gray.light};
	border-radius: 100%;

	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		width: 100px;
		height: 100px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(400)} {
		width: 80px;
		height: 80px;
	}
`;

const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 32px;
	margin-top: 32px;
	font-size: 30px;
	${props => props.theme.mediaQueries.maxScreen.custom(700)} {
		font-size: 30px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		font-size: 24px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(400)} {
		font-size: 18px;
	}
`;

type WhoAreWeProps = React.PropsWithoutRef<{}>;

type WhoAreWeComponent = React.FunctionComponent<WhoAreWeProps>;

const WhoAreWe: WhoAreWeComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Root>
				<Title>Quem somos:</Title>
				<CardsContainer>
					<WhoAreWeCard
						imageComponent={<Image />}
						name="Reijane Salazar"
						occupation="CKO | Phd. Educação"
					/>
					<WhoAreWeCard
						imageComponent={<Image />}
						name="Adla Viana"
						occupation="COO | MsC. Antropologia"
					/>
					<WhoAreWeCard
						imageComponent={<Image />}
						name="Maria Luiza Salvador"
						occupation="CEO | Product Designer"
					/>
				</CardsContainer>
			</Root>
		</HomeSubpartRoot>
	);
};

export default WhoAreWe;
