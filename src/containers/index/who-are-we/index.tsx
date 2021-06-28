import React from 'react';
import styled, { css } from 'styled-components';
import Images from '../../../images';
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

const ImageCommonCSS = css`
	width: 128px;
	height: 128px;
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

const MariaImage = styled(Images.Maria)`
	${ImageCommonCSS}
`;
const AdlaImage = styled(Images.Adla)`
	${ImageCommonCSS}
`;
const ReijaneImage = styled(Images.Reijane)`
	${ImageCommonCSS}
`;

const CardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 28px;
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
						imageComponent={<ReijaneImage />}
						name="Reijane Salazar"
						occupation="CKO | Phd. Educação"
					/>
					<WhoAreWeCard
						imageComponent={<AdlaImage />}
						name="Adla Viana"
						occupation="COO | MsC. Antropologia"
					/>
					<WhoAreWeCard
						imageComponent={<MariaImage />}
						name="Maria Luiza Salvador"
						occupation="CEO | Product Designer"
					/>
				</CardsContainer>
			</Root>
		</HomeSubpartRoot>
	);
};

export default WhoAreWe;
