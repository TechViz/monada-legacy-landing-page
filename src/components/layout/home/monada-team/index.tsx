import React from 'react';
import styled, { css } from 'styled-components';
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

type HomeMonadaTeamProps = React.PropsWithoutRef<{
}>;

type HomeMonadaTeamComponent = React.FunctionComponent<HomeMonadaTeamProps>;

const commonPictureCss = css`
	object-fit: cover;
`;

const HomeMonadaTeam: HomeMonadaTeamComponent = ({  }) => {
	return (
		<Root>
			<Title>Nossa equipe</Title>
			<PicturesContainer>
				<MonadaTeamPicture
					personName='Reijane Salazar'
					personTitle='Educadora e Gerontóloga Pesquisa'
				>
					<Images.Founders.Reijane css={commonPictureCss} />
				</MonadaTeamPicture>
				<MonadaTeamPicture
					personName='Adla Viana'
					personTitle='Antropóloga Pesquisa'
				>
					<Images.Founders.Adla css={commonPictureCss} />
				</MonadaTeamPicture>
				<MonadaTeamPicture
					personName='Maria Luiza Salvador'
					personTitle='Designer UX/UI Design'
				>
					<Images.Founders.Maria css={commonPictureCss} />
				</MonadaTeamPicture>
			</PicturesContainer>
		</Root>
	);
}

export default HomeMonadaTeam;