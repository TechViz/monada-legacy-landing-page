import React from 'react';
import styled from 'styled-components';
import MonadaTeamPicture from './picture';
import Images from '../../../../constants/images';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 40px;
	margin-bottom: 64px;
`;

const PicturesContainer= styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 1200px;
	width: 100%;
`;

const ReijaneImage = styled(Images.Founders.Reijane).attrs({ fit: 'cover' })``;
const MariaImage = styled(Images.Founders.Maria).attrs({ fit: 'cover' })``;
const AdlaImage = styled(Images.Founders.Adla).attrs({ fit: 'cover' })``;

type HomeMonadaTeamProps = React.PropsWithoutRef<{
}>;

type HomeMonadaTeamComponent = React.FunctionComponent<HomeMonadaTeamProps>;

const HomeMonadaTeam: HomeMonadaTeamComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='team'>
			<Title>Nossa equipe</Title>
			<PicturesContainer>
				<MonadaTeamPicture
					personName='Reijane Salazar'
					personTitle='Educadora e Gerontóloga Pesquisa'
				>
					<ReijaneImage />
				</MonadaTeamPicture>
				<MonadaTeamPicture
					personName='Adla Viana'
					personTitle='Antropóloga Pesquisa'
				>
					<AdlaImage />
				</MonadaTeamPicture>
				<MonadaTeamPicture
					personName='Maria Luiza Salvador'
					personTitle='Designer UX/UI Design'
				>
					<MariaImage />
				</MonadaTeamPicture>
			</PicturesContainer>
		</Root>
	);
}

export default HomeMonadaTeam;